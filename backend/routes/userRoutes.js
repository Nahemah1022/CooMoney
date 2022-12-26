const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const tokenValidation = require('../middleware/tokenValidation');

router.post('/signUp', userController.signUp);
router.post('/login', userController.login);
router.get('/checkUser', userController.checkUser);
router.get('/getUserByUsername/:username', tokenValidation, userController.getUserByUsername);
router.get('/getAllUserByUsername/:username', tokenValidation, userController.getAllUserByUsername);
router.get('/getUserByID', tokenValidation, userController.getUserByID);


module.exports = router;