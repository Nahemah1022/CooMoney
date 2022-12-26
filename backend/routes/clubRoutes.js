const express = require('express');
const clubController = require('../controller/clubController')
const tokenValidation = require('../middleware/tokenValidation');
const upload = require('../helper/clubImageUpload');

let router = express.Router();

router.post('/createClub', tokenValidation, clubController.createClub);
router.put('/updateClubImage', tokenValidation, clubController.updateClubImage);
router.get('/getClub', tokenValidation, clubController.getClub);
router.get('/getClubProject/:clubID', tokenValidation, clubController.getClubProject);
router.post('/image', upload.single('clubImage'), clubController.uploadImage);
router.put('/addPassbook', tokenValidation, clubController.addPassbook);
router.get('/getPassbook', tokenValidation, clubController.getPassbook);
router.put('/updateIntro', tokenValidation, clubController.updateIntro);
router.put('/addAnnounce', tokenValidation, clubController.addAnnounce);
router.delete('/deleteAnnounce', tokenValidation, clubController.deleteAnnounce);
router.get('/getAnnounce', tokenValidation, clubController.getAnnounce);
router.put('/updateAnnounce', tokenValidation, clubController.updateAnnounce);
router.get('/getClubMembers', tokenValidation, clubController.getClubMembers);
router.put('/addClubMembers', tokenValidation, clubController.addClubMembers);
router.get('/searchClub', tokenValidation, clubController.searchClub);
router.put('/joinApplication', tokenValidation, clubController.joinApplication);
router.get('/getApplication', tokenValidation, clubController.getApplication);
router.put('/updateApplication', tokenValidation, clubController.updateApplication);
router.put('/updatePassbookOrder', tokenValidation, clubController.updatePassbookOrder);
router.put('/updatePassbookInform', tokenValidation, clubController.updatePassbookInform);

module.exports = router;