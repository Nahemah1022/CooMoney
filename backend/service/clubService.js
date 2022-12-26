const Club = require('../database/model/clubModel');
const User = require('../database/model/userModel');
const Project = require('../database/model/projectModel');
const constants = require('../constants');
const dbHelper = require('../helper/dbHelper');
const getUserID = require('../helper/getUserID');
const formidable = require('formidable');
// const { parse } = require('dotenv/types');

module.exports = {
    createClub : async (req) => {
        try {
            let form = new formidable.IncomingForm();
            let newClub = new Club();
            let userID = await getUserID(req);
            let user = await User.findById(userID);

            let parseRes = await new Promise ((resolve, reject) => {
                form.parse(req, (err, fields, files) => {
                    if(err) { throw new Error(err) }
                    resolve ({ fields, files })
                });
            })

            let isClub = await Club.findOne({'clubName': parseRes.fields.clubName});
            if(isClub){
                throw new Error(constants.clubResponse.DUPLICATE_CLUBNAME);
            }

            newClub.clubName = parseRes.fields.clubName;
            if(parseRes.fields.clubIntro){
                newClub.clubIntro = parseRes.fields.clubIntro;
            }
            newClub.clubImage = `https://${process.env.CLUB_BUCKET_NAME}.s3.ap-northeast-2.amazonaws.com/${parseRes.files.clubImage.name}`;
            if(parseRes.fields.clubMembers){
                let members = JSON.parse(parseRes.fields.clubMembers);
                console.log(members);
                for(i=0; i<members.length; i++){
                    let member = await User.findOne({'username': members[i]});
                    newClub.clubMembers.push(member._id);
                }
            }
            newClub.clubMembers.push(user._id);

            let saveResult = await newClub.save();
            console.log(saveResult);
            let member = "";
            for(i=0; i<saveResult.clubMembers.length; i++){
                member = await User.findById(saveResult.clubMembers[i]);
                member.participateClubID.push(saveResult._id);
                await member.save();
            }

            return await saveResult.toObject();
        } catch (err) {
            console.log('something went wrong => clubService => createClub', err.message);
            throw new Error(err);
        }
    },
    getClub : async (req) => {
        try {
            const userID = await getUserID(req);
            const user = await User.findById(userID);

            let clubs = [];
            for(let i=0; i<user.participateClubID.length; i++) {
                let club = await Club.findById(user.participateClubID[i]);
                clubs.push(club);   
            }
            // let response = [];
            // if(clubs.length != 0){
            //     response = await dbHelper.formatDBData(clubs);
            // }
            return clubs;
            
        } catch (error) {
            console.log('something went wrong => clubService => getClub', error);
            throw new Error(error)
        }
    },
    updateClubImage : async (req) => {
        try {
            let clubID = req.query.clubID;
            let club = await Club.findById(clubID);
            let form = new formidable.IncomingForm();
            let parseRes = await new Promise ((resolve, reject) => {
                form.parse(req, (err, fields, files) => {
                    if(err) { throw new Error(err) }
                    resolve ({ fields, files })
                });
            });

            club.clubImage = `https://${process.env.CLUB_BUCKET_NAME}.s3.ap-northeast-2.amazonaws.com/${parseRes.files.clubImage.name}`;
            let result = await club.save();
            result = await dbHelper.formatDBData(result);
            return result;
        } catch (error) {
            console.log('something went wrong => clubService => updateClubImage', error);
            throw new Error(error)
        }
    },
    getClubProject : async (req) => {
        try {
            let clubID =  req.params.clubID;
            let club = await Club.findById(clubID);
            let userID = await getUserID(req);

            let projects = [];
            for(i=0; i<club.clubProjects.length; i++){
                let project = await Project.findById(club.clubProjects[i]);
                if(project.projectChecker.includes(userID)){
                    project.userAuthorization = true;
                } else {
                    project.userAuthorization = false;                
                }
                projects.push(project);
            }

            return projects;
        } catch (error) {
            console.log('something went wrong => clubService => getClubProject', error);
            throw new Error(error)
        }
    },
    addPassbook: async (req) => {
        try {
            let data = req.body;
            let clubID = req.query.clubID;
            let club = await Club.findById(clubID);
            let newPassbook = {
                passbookName : data.passbookName,
                passbookBalance : data.passbookBalance,
                passbookOrder : 1
            }
            for(i=0; i<club.clubPassbook.length; i++){
                club.clubPassbook[i].passbookOrder++;
            }
            club.clubPassbook.unshift(newPassbook);
            let result = await club.save();
            return await result.toObject();
        } catch (error) {
            console.log('something went wrong => clubService => addPassbook', error);
            throw new Error(error)
        }
    },
    getPassbook: async ({ clubID }) => {
        try {
            console.log(clubID);
            const club = await Club.findById(clubID);
            let passbooks = [];
            for(let i=0; i<club.clubPassbook.length; i++){
                passbooks.push(club.clubPassbook[i]);
            }
            return passbooks;
        } catch (error) {   
            console.log('something went wrong => clubService => getPassbook', error);
            throw new Error(error)
        }
    },
    updateIntro: async (req) => {
        try {
            let clubID = req.query.clubID;
            let club = await Club.findById(clubID);
            club.clubIntro = req.body.clubIntro;

            const result = await club.save();
            return result;
        } catch (error) {
            console.log('something went wrong => clubService => updateIntro', error);
            throw new Error(error)
        }
    },
    addAnnounce: async (req) => {
        try {
            let clubID = req.query.clubID;
            let userID = await getUserID(req);
            let club = await Club.findById(clubID);
            let id = club.clubAnnounce.length+1;
            club.clubAnnounce.push({ establisher: userID, ...req.body, id });
            
            const result = await club.save();
            return result;
        } catch (error) {
            console.log('something went wrong => clubService => addAnnounce', error);
            throw new Error(error)
        }
    },
    deleteAnnounce: async ({ clubID, announceID }) => {
        try {
            let club = await Club.findById(clubID);
            let gette = false;
            for(i=0; i<club.clubAnnounce.length; i++){
                if(club.clubAnnounce[i]._id == announceID){
                    gette = true;
                    club.clubAnnounce.splice(i, 1);
                }
                if(gette){
                    if(club.clubAnnounce[i]){
                        club.clubAnnounce[i].id--;
                    }
                }
            }
            if(!gette){
                throw new Error(constants.clubResponse.ANNOUNCE_NOT_FOUND);
            }
            const result = await club.save();
            return result;
        } catch (error) {
            console.log('something went wrong => clubService => deleteAnnounce', error);
            throw new Error(error)
        }
    },
    getAnnounce: async ({ clubID }) => {
        try {
            let club = await Club.findById(clubID);
            let Announces = [];
            for(i=0; i<club.clubAnnounce.length; i++){
                Announces.push(club.clubAnnounce[club.clubAnnounce.length-i-1]);
            }
            return Announces;
        } catch (error) {
            console.log('something went wrong => clubService => getAnnounce', error);
            throw new Error(error)
        }
    },
    updateAnnounce: async (req) => {
        try {
            let userID = await getUserID(req);
            let data = req.body;
            let clubID = req.query.clubID;
            let announceID = req.query.announceID;
            let club = await Club.findById(clubID);
            let target = [];
            for(i=0; i<club.clubAnnounce.length; i++){
                if(club.clubAnnounce[i]._id == announceID){
                    club.clubAnnounce[i].date = data.date;
                    club.clubAnnounce[i].info = data.info;
                    club.clubAnnounce[i].establisher = userID;
                    target = club.clubAnnounce.splice(i, 1);
                }
            }
            club.clubAnnounce.push(target[0]);
            let result = await club.save();
            return result;
        } catch (error) {
            console.log('something went wrong => clubService => updateAnnounce', error);
            throw new Error(error)
        }
    },
    getClubMembers: async({ clubID }) => {
        try {
            console.log(clubID);
            const club = await Club.findById(clubID);
            let members = [];
            for(i=0; i<club.clubMembers.length; i++){
                let member = await User.findById(club.clubMembers[i]);
                members.push(member);
            }
            members = await dbHelper.formatDBData(members);
            return members;
        } catch (error) {
            console.log('something went wrong => clubService => getClubMembers', error);
            throw new Error(error)
        }
    },
    addClubMembers: async(req) => {
        try {
            const clubID = req.query.clubID;
            let user = await User.findOne({ "username": req.body.username });
            let club = await Club.findById(clubID);
            if(club.clubMembers.includes(user._id)){
                throw new Error(constants.clubResponse.MEMBER_EXIST_ERROR);
            }
            club.clubMembers.push(user._id);

            let result = club.save();
            return result;

        } catch (error) {
            console.log('something went wrong => clubService => addClubMembers', error);
            throw new Error(error)
        }
    },
    searchClub: async (req) => {
        try {
            let clubName = req.query.clubName;
            console.log(req.query);
            let userID = await getUserID(req);
            let user = await User.findById(userID);
            let result = await Club.find({ 'clubName': { "$regex": clubName } });
            console.log(result);
            for(i=0; i<result.length; i++){
                if(user.participateClubID.includes(result[i]._id)){
                    result.splice(i, 1);
                    i--;
                }
            }
            let clubs = await dbHelper.formatDBData(result);
            
            return clubs;
        } catch (error) {
            console.log('something went wrong => clubService => searchClub', error);
            throw new Error(error)
        }
    },
    joinApplication: async (req) => {
        try {
            const userID = await getUserID(req);
            let clubID = req.query.clubID;
            let club = await Club.findById(clubID);
            if(club.clubMembers.includes(userID)){
                throw new Error(constants.clubResponse.MEMBER_EXIST_ERROR);
            }
            for(i=0; i<club.clubApplication.length; i++){
                if(club.clubApplication[i].applicant == userID){
                    throw new Error("DUPLICATE REQUEST");
                }
            }
            club.clubApplication.push({
                applicant: userID,
                ...req.body
            })

            let result = await club.save();
            return result;
        } catch (error) {
            console.log('something went wrong => clubService => joinApplication', error);
            throw new Error(error)
        }
    },
    getApplication: async (req) => {
        try {
            let clubID = req.query.clubID;
            let club = await Club.findById(clubID);
            let applications = [];
            for(i=0; i<club.clubApplication.length; i++){
                applications.push(club.clubApplication[i]);
            }

            return applications;
        } catch (error) {
            console.log('something went wrong => clubService => getApplication', error);
            throw new Error(error)
        }
    },
    updateApplication: async (req) => {
        try {
            let clubID = req.query.clubID;
            let applicationID = req.query.applicationID;
            let club = await Club.findById(clubID);
            let user;
            for(i=0; i<club.clubApplication.length; i++){
                if(club.clubApplication[i]._id == applicationID){
                    if(req.body.result == 'APPROVED'){
                        club.clubMembers.push(club.clubApplication[i].applicant);
                        user = await User.findById(club.clubApplication[i].applicant)
                        user.participateClubID.push(clubID);
                        club.clubApplication.splice(i, 1);
                    }else if(req.body.result == "REJECTED"){
                        club.clubApplication.splice(i, 1);
                    }
                }
            }
            await user.save();
            let result = await club.save();
            return result;
        } catch (error) {
            console.log('something went wrong => clubService => updateApplication', error);
            throw new Error(error)
        }
    },
    updatePassbookOrder: async (req) => {
        try {
            let userID = await getUserID(req);
            let clubID = req.query.clubID;
            let user = await User.findById(userID);
            let club = await Club.findById(clubID);

            let passbook1ID = req.body.passbookID1;
            let passbook2ID = req.body.passbookID2;
            let first = {
                id: 0,
                order: 0
            };
            let second = {
                id: 0,
                order: 0
            };
            for(i=0; i<club.clubPassbook.length; i++){
                if(club.clubPassbook[i]._id == passbook1ID){
                    first.order = club.clubPassbook[i].passbookOrder;
                    first.id = i
                }
                if(club.clubPassbook[i]._id == passbook2ID){
                    second.order = club.clubPassbook[i].passbookOrder;
                    second.id = i
                }
            }
            
            club.clubPassbook[first.id] = second.order;
            club.clubPassbook[second.id] = first.order;
            
            let response = await club.save();
            return response;
        } catch (error) {
            console.log('something went wrong => clubService => updatePassbookOrder', error);
            throw new Error(error)
        }
    },
    updatePassbookInform: async (req) => {
        try {
            let clubID = req.query.clubID;
            let club = await Club.findById(clubID);
            let passbookID = req.query.passbookID;
            
            let data = req.body;
            for(i=0; i<club.clubPassbook.length; i++){
                if(club.clubPassbook[i]._id == passbookID){
                    club.clubPassbook[i].passbookName = data.passbookName;
                    club.clubPassbook[i].passbookBalance = data.passbookBalance;
                }
            }

            let result = await club.save();
            return result;

        } catch (error) {
            console.log('something went wrong => clubService => updatePassbookInform', error);
            throw new Error(error)
        }
    }
}