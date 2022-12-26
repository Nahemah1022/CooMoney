const express = require('express');
const projectController = require('../controller/projectController');
const tokenValidation = require('../middleware/tokenValidation');
let router = express.Router();

router.get('/getProject', tokenValidation, projectController.getProject);
router.post('/createProject', tokenValidation, projectController.createProject);
router.put('/updateProjectNameAndTheme', tokenValidation, projectController.updateProjectNameAndTheme);
router.put('/addChecker', tokenValidation, projectController.addChecker);
router.put('/endProject', tokenValidation, projectController.endProject);
router.put('/addNewTags', tokenValidation, projectController.addNewTags);
router.get('/getProjectTags', tokenValidation, projectController.getProjectTags);

module.exports = router;