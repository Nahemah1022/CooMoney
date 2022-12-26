const express = require('express');
const revenueController = require('../controller/revenueController');
const tokenValidation = require('../middleware/tokenValidation');
const upload = require('../helper/revenueImageUpload');
let router = express.Router();

router.post('/createRevenue', tokenValidation, revenueController.createRevenue);
router.post('/image', tokenValidation, upload.single('revenueEvidence'), revenueController.uploadImage)
router.put('/updateRevenue', tokenValidation, revenueController.updateRevenue);
router.get('/getAllRevenue', tokenValidation, revenueController.getAllRevenue);
router.get('/getTenRevenue', tokenValidation, revenueController.getTenRevenue)

module.exports = router;
