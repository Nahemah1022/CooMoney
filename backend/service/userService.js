const constants = require('../constants');
const User = require('../database/model/userModel');
const Club = require('../database/model/clubModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dbHelper = require('../helper/dbHelper');
const getUserID = require('../helper/getUserID');

module.exports = {
    createUser: async (data) => {
        try{
            let user = new User();
            let result = await User.findOne({ $or:[{'username': data.username}, {'email': data.email}]});
            if(result) {
                throw new Error(constants.userResponse.DUPLICATE_USERNAME);
            }
            user.username = data.username;
            user.email = data.email;
            user.userGender = data.userGender;
            user.userPhoto = data.userPhoto;
            user.password = await bcrypt.hash(data.password, 12);
            console.log(user.password);
            let newUser = await user.save();
            return await newUser.toObject();
        } catch (err) {
            console.log("Something went wrong: Service => userService => createUser", err);
            throw new Error(err);
        }
    },
    userLogin: async (data) => {
        try{
            const result = await User.findOne({ "email": data.email });
            if(!result){
                console.log("email not found");
                throw new Error(constants.userResponse.EMAIL_NOT_FOUND);
            }
            const inValid = await bcrypt.compare(data.password, result.password)
            if(!inValid){
                console.log("invalid password");
                throw new Error(constants.userResponse.INVALID_PASSWORD);
            }
            const token = await jwt.sign({ id: result._id }, process.env.SECRET_KEY||"my-secret", { expiresIn: Math.floor(Date.now() / 1000) + (60 * 60) });
            return { token };
        } catch (err) {
            console.log('Something went wrong: Service => userService => userLogin', err);
            throw new Error(err);
        }
    },
    getUserByUsername: async (req) => {
        try{
            let userID = await getUserID(req);
            let username = req.params.username;
            let clubID = req.query.clubID;
            let club = await Club.findById(clubID); 
            let result = await User.find({'username': {$regex: username}});
            for(let i=0; i<result.length; i++){
                if(!club.clubMembers.includes(result[i]._id) || result[i]._id == userID){
                    result.splice(i, 1);
                    i--;
                }
            }

            return result;
        } catch (err) {
            console.log('Something went wrong: Service => userService　=> getUserByUsernames', err);
            throw new Error(err);
        }
    },
    getAllUserByUsername: async (req) => {
        try{
            let userID = await getUserID(req)
            let result = await User.find({'username': {$regex: req.params.username}});
            for(let i=0; i<result.length; i++){
                if(result[i]._id == userID){
                    result.splice(i, 1);
                    i--;
                }
            }
            return result;
        } catch (err) {
            console.log('Something went wrong: Service => userService　=> getUserByUsernames', err);
            throw new Error(err);
        }
    },
    getUserByID: async ({ userID }) => {
        try {
            userID = JSON.parse(userID);
            let users = [];
            for(i=0; i<userID.length; i++){
                let user = await User.findById(userID[i]);
                users.push(user);
            }
            return users;
        } catch (err) {
            console.log('Something went wrong: Service => userService　=> getUserByID', err);
            throw new Error(err);
        }
    },
    checkUser: async ({ email, username, password, userPhoto }) => {
        try {
            let user = await User.find({ email });
            let result = {
                isExist: false,
                token: "",
                username,
                password,
                userPhoto,
                email
            };
            if(user.length>0){
                result.token = await jwt.sign({ id: user[0]._id }, process.env.SECRET_KEY||"my-secret", { expiresIn: Math.floor(Date.now() / 1000) + (60 * 60) })
                result.isExist = true;
            }
            return result;
        } catch (err) {
            console.log('Something went wrong: Service => userService　=> getUserByID', err);
            throw new Error(err);
        }
    },
}