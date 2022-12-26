const projectService = require('../service/projectService');
const constants = require('../constants'); 

module.exports = {
    createProject: async (req, res) => {
        let response = { ...constants.formatResponse };
        try{
            const responseFromService = await projectService.createProject(req);
            response.status = 200;
            response.message = constants.projectResponse.PROJECT_CREATE;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (err) {
            console.log('Something went wrong: controller: projectController: createProject');
            response.status = 500;
            response.message = err.message;
            res.send(response);
        }
    },
    addChecker: async (req, res) => {
        let response = { ...constants.formatResponse };
        try{
            const responseFromService = await projectService.addChecker(req);
            response.status = 200;
            response.message = constants.projectResponse.CHECKER_PUT;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (err) {
            console.log('Something went wrong: controller: projectController: addChecker');
            response.status = 500;
            response.message = err.message;
            res.send(response);
        }
    },
    endProject: async (req, res) => {
        let response = { ...constants.formatResponse };
        try{
            const responseFromService = await projectService.endProject(req);
            response.status = 200;
            response.message = constants.projectResponse.PROJECT_END;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (err) {
            console.log('Something went wrong: controller: projectController: createProject');
            response.status = 500;
            response.message = err.message;
            res.send(response);
        }
    },
    getProject: async (req, res) => {
        let response = { ...constants.formatResponse };
        try{
            const responseFromService = await projectService.getProject(req.query);
            response.status = 200;
            response.message = constants.projectResponse.PROJECT_SEARCH;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (err) {
            console.log('Something went wrong: controller: projectController: getProject');
            response.status = 500;
            response.message = err.message;
            res.send(response);
        }
    },
    updateProjectNameAndTheme: async (req, res) => {
        let response = { ...constants.formatResponse };
        try{
            const responseFromService = await projectService.updateProjectNameAndTheme(req);
            response.status = 200;
            response.message = constants.projectResponse.PROJECT_SEARCH;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (err) {
            console.log('Something went wrong: controller: projectController: updateProjectNameAndTheme');
            response.status = 500;
            response.message = err.message;
            res.send(response);
        }
    },
    getProjectTags: async (req, res) => {
        let response = { ...constants.formatResponse };
        try{
            const responseFromService = await projectService.getProjectTags(req.query);
            response.status = 200;
            response.message = constants.projectResponse.GET_TAG_SUCCESS;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (err) {
            console.log('Something went wrong => controller => projectController => getProjectTags');
            response.status = 500;
            response.message = err.message;
            res.send(response);
        }
    },
    addNewTags: async (req, res) => {
        let response = { ...constants.formatResponse };
        try{
            const responseFromService = await projectService.addNewTags(req);
            response.status = 200;
            response.message = constants.projectResponse.ADD_TAG_SUCCESS;
            response.data = responseFromService;
            res.status(response.status).send(response);
        } catch (err) {
            console.log('Something went wrong => controller => projectController => addNewTags');
            response.status = 500;
            response.message = err.message;
            res.send(response);
        }
    },
}