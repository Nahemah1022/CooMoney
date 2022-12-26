const constants = require('../constants');
const clubService = require('../service/clubService')

module.exports = {
    createClub : async (req, res) => {
        let response = { ...constants.formatResponse };
        try {
            const responseFromService = await clubService.createClub(req);
            response.status = 200;
            response.message = constants.clubResponse.CLUB_CREATE;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (error) {
            console.log(error);
            response.status = 500;
            response.message = error.message;
            res.send(response);
        }
    },
    getClub : async (req, res) => {
        let response = { ...constants.formatResponse };
        try {
            const responseFromService = await clubService.getClub(req);
            response.status = 200;
            response.message = constants.clubResponse.CLUB_GET;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (error) {
            response.status = 500;
            response.message = error.message;
            res.send(response);
        }
    },
    updateClubImage: async (req, res) => {
        let response = { ...constants.formatResponse };
        try {
            const responseFromService = await clubService.updateClubImage(req);
            response.status = 200;
            response.message = constants.uploadImageResponse.CLUB_UPDATED;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (error) {
            response.message = error.message;
            response.status = 500;
            res.send(response);
        }
    },
    uploadImage: async (req, res) => {
        let response = { ...constants.formatResponse };
        try {
            response.status = 200;
            response.message = constants.uploadImageResponse.POST_IMAGE_SUCCESS;
            res.status(response.status).send(response);
        } catch (error) {
            response.message = error.message;
            response.status = 500;
            res.send(response);
        }
    },
    getClubProject: async (req, res) => {
        let response = { ...constants.formatResponse };
        try {
            const responseFromService = await clubService.getClubProject(req);
            response.status = 200;
            response.message = constants.clubResponse.GET_CLUBPROJECT_SUCCESS;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (error) {
            response.message = error.message;
            response.status = 500;
            res.send(response);
        }
    },
    addPassbook: async (req, res) => {
        let response = { ...constants.formatResponse };
        try {
            const responseFromService = await clubService.addPassbook(req);
            response.status = 200;
            response.message = constants.clubResponse.ADD_PASSBOOK_SUCCESS;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (error) {
            response.message = error.message;
            response.status = 500;
            res.send(response);
        }
    },
    getPassbook: async (req, res) => {
        let response = { ...constants.formatResponse };
        try {
            console.log(req.query);
            const responseFromService = await clubService.getPassbook(req.query);
            response.status = 200;
            response.message = constants.clubResponse.GET_PASSBOOK_SUCCESS;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (error) {
            response.message = error.message;
            response.status = 500;
            res.send(response);
        }
    },
    updateIntro: async (req, res) => {
        let response = { ...constants.formatResponse };
        try {
            const responseFromService = await clubService.updateIntro(req);
            response.status = 200;
            response.message = constants.clubResponse.PUT_INTRO_SUCCESS;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (error) {
            response.message = error.message;
            response.status = 500;
            res.send(response);
        }
    },
    addAnnounce: async (req, res) => {
        let response = { ...constants.formatResponse };
        try {
            const responseFromService = await clubService.addAnnounce(req);
            response.status = 200;
            response.message = constants.clubResponse.ADD_ANNOUNCE_SUCCESS;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (error) {
            response.message = error.message;
            response.status = 500;
            res.send(response);
        }
    },
    deleteAnnounce: async(req, res) => {
        let response = { ...constants.formatResponse };
        try {
            const responseFromService = await clubService.deleteAnnounce(req.query);
            response.status = 200;
            response.message = constants.clubResponse.DELETE_ANNOUNCE_SUCCESS;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (error) {
            response.message = error.message;
            response.status = 500;
            res.send(response);
        }
    },
    getAnnounce: async(req, res) => {
        let response = { ...constants.formatResponse };
        try {
            const responseFromService = await clubService.getAnnounce(req.query);
            response.status = 200;
            response.message = constants.clubResponse.GET_ANNOUNCE_SUCCESS;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (error) {
            response.message = error.message;
            response.status = 500;
            res.send(response);
        }
    },
    updateAnnounce: async(req, res) => {
        let response = { ...constants.formatResponse };
        try {
            const responseFromService = await clubService.updateAnnounce(req);
            response.status = 200;
            response.message = constants.clubResponse.PUT_ANNOUNCE_SUCCESS;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (error) {
            response.message = error.message;
            response.status = 500;
            res.send(response);
        }
    },
    getClubMembers: async(req, res) => {
        let response = { ...constants.formatResponse };
        try {
            const responseFromService = await clubService.getClubMembers(req.query);
            response.status = 200;
            response.message = constants.clubResponse.GET_MEMBERS_SUCCESS;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (error) {
            response.message = error.message;
            response.status = 500;
            res.send(response);
        }
    },
    addClubMembers: async (req, res) => {
        let response = { ...constants.formatResponse };
        try {
            const responseFromService = await clubService.addClubMembers(req);
            response.status = 200;
            response.message = constants.clubResponse.ADD_MEMBERS_SUCCESS;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (error) {
            response.message = error.message;
            response.status = 500;
            res.send(response);
        }
    },
    searchClub: async (req, res) => {
        let response = { ...constants.formatResponse };
        try {
            const responseFromService = await clubService.searchClub(req);
            response.status = 200;
            response.message = constants.clubResponse.CLUB_GET;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (error) {
            response.message = error.message;
            response.status = 500;
            res.send(response);
        }
    },
    joinApplication: async (req, res) => {
        let response = { ...constants.formatResponse };
        try {
            const responseFromService = await clubService.joinApplication(req);
            response.status = 200;
            response.message = constants.clubResponse.APPLICATION_STATUS;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (error) {
            response.message = error.message;
            response.status = 500;
            res.send(response);
        }
    },
    getApplication: async (req, res) => {
        let response = { ...constants.formatResponse };
        try {
            const responseFromService = await clubService.getApplication(req);
            response.status = 200;
            response.message = constants.clubResponse.APPLICATION_STATUS;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (error) {
            response.message = error.message;
            response.status = 500;
            res.send(response);
        }
    },
    updateApplication: async (req, res) => {
        let response = { ...constants.formatResponse };
        try {
            const responseFromService = await clubService.updateApplication(req);
            response.status = 200;
            response.message = constants.clubResponse.APPLICATION_STATUS;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (error) {
            response.message = error.message;
            response.status = 500;
            res.send(response);
        } 
    },
    updatePassbookOrder: async (req, res) => {
        let response = { ...constants.formatResponse };
        try {
            const responseFromService = await clubService.updatePassbookOrder(req);
            response.status = 200;
            response.message = constants.clubResponse.UPDATE_PASSBOOK_SUCCESS;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (error) {
            response.message = error.message;
            response.status = 500;
            res.send(response);
        } 
    },
    updatePassbookInform: async (req, res) => {
        let response = { ...constants.formatResponse };
        try {
            const responseFromService = await clubService.updatePassbookInform(req);
            response.status = 200;
            response.message = constants.clubResponse.UPDATE_PASSBOOK_SUCCESS;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (error) {
            response.message = error.message;
            response.status = 500;
            res.send(response);
        } 
    },
}