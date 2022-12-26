const revenueService = require('../service/revenueService');
const constants = require('../constants'); 

module.exports = {
    createRevenue: async (req, res) => {
        let response = { ...constants.formatResponse };
        try{
            const responseFromService = await revenueService.createRevenue(req);
            response.status = 200;
            response.message = constants.projectResponse.REVENUE_CREATE;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (err) {
            console.log('Something went wrong: controller: revenueController: createRevenue');
            response.status = 500;
            response.message = err.message;
            res.send(response);
        }
    },
    uploadImage: async (req, res) => {
        let response = { ...constants.formatResponse };
        try{
            response.status = 200;
            response.message = constants.uploadImageResponse.POST_IMAGE_SUCCESS;
            res.status(response.status).send(response);
        } catch (err) {
            console.log('Something went wrong: controller: revenueController: uploadImage');
            response.status = 500;
            response.message = err.message;
            res.send(response);
        }
    },
    updateRevenue: async (req, res) => {
        let response = { ...constants.formatResponse };
        try{
            const responseFromService = await revenueService.updateRevenue(req);
            response.status = 200;
            response.message = constants.revenueResponse.REVENUE_UPDATE;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (err) {
            console.log('Something went wrong: controller: revenueController: updateRevenue');
            response.status = 500;
            response.message = err.message;
            res.send(response);
        }
    }, 
    getAllRevenue: async (req, res) => {
        let response = { ...constants.formatResponse };
        try{
            console.log(req.query);
            const responseFromService = await revenueService.getAllRevenue(req.query);
            response.status = 200;
            response.message = constants.revenueResponse.REVENUE_GET;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (err) {
            console.log('Something went wrong => controller => revenueController => getRevenue');
            response.status = 500;
            response.message = err.message;
            res.send(response);
        }
    }, 
    getTenRevenue: async (req, res) => {
        let response = { ...constants.formatResponse };
        try{
            const responseFromService = await revenueService.getTenRevenue(req.query);
            response.status = 200;
            response.message = constants.revenueResponse.REVENUE_GET;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (err) {
            console.log('Something went wrong => controller => revenueController => getTenRevenue');
            response.status = 500;
            response.message = err.message;
            res.send(response);
        }
    }
}