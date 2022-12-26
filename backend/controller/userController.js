const constants = require('../constants');
const userService = require('../service/userService');

module.exports = {
    signUp: async (req, res) => {
        let response = {...constants.formatResponse};
        try{
            let responseFromService = await userService.createUser(req.body);
            response.status = 200;
            response.message = constants.userResponse.USER_CREATE;
            response.data = responseFromService;
            res.status(200).send(response);
        } catch (err) {
            console.log('Something wents wrong: controller => userController => signUp', err);
            response.message = err.message;
            response.status = 500;
            res.send(response);
        }
    }, 
    login: async (req, res) => {
        let response = { ...constants.formatResponse };
        try{
            let responseFromService = await userService.userLogin(req.body);
            response.status = 200;
            response.message = constants.userResponse.LOGIN_SUCCESS;
            response.data = responseFromService;
            res.status(200).send(response);
        } catch (err) {
            console.log('Something wents wrong: controller => userController => login', err);
            response.message = err.message;
            response.status = 500;
            res.send(response);
        }
    },
    getUserByUsername: async (req, res) => {
        let response = { ...constants.formatResponse };
        try{
            let responseFromService = await userService.getUserByUsername(req);
            response.status = 200;
            response.message = constants.userResponse.USER_GET_SUCCESS;
            response.data = responseFromService;
            res.status(200).send(response);
        } catch (err) {
            console.log('Something wents wrong: controller => userController => getUserByUsername', err);
            response.message = err.message;
            response.status = 500;
            res.send(response);
        }
    },
    getUserByID: async (req, res) => {
        let response = { ...constants.formatResponse };
        try{
            let responseFromService = await userService.getUserByID(req.query);
            response.status = 200;
            response.message = constants.userResponse.USER_GET_SUCCESS;
            response.data = responseFromService;
            res.status(200).send(response);
        } catch (err) {
            console.log('Something wents wrong: controller => userController => getUserByID', err);
            response.message = err.message;
            response.status = 500;
            res.send(response);
        }
    },
    checkUser: async (req, res) => {
        let response = { ...constants.formatResponse };
        try{
            let responseFromService = await userService.checkUser(req.query);
            response.status = 200;
            response.message = constants.userResponse.USER_GET_SUCCESS;
            response.data = responseFromService;
            res.status(200).send(response);
        } catch (err) {
            console.log('Something wents wrong: controller => userController => getUserByID', err);
            response.message = err.message;
            response.status = 500;
            res.send(response);
        }
    },
    getAllUserByUsername: async (req, res) => {
        let response = { ...constants.formatResponse };
        try{
            let responseFromService = await userService.getAllUserByUsername(req);
            response.status = 200;
            response.message = constants.userResponse.USER_GET_SUCCESS;
            response.data = responseFromService;
            res.status(200).send(response);
        } catch (err) {
            console.log('Something wents wrong: controller => userController => getUserByUsername', err);
            response.message = err.message;
            response.status = 500;
            res.send(response);
        }
    },
}

