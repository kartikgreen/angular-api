var express = require('express');
var router = express.Router();

//Routes for ideas
var ideaCtrl = require('../controllers/ideaController.js');
router.route('/ideas').get(ideaCtrl.getAllIdeas);
router.route('/ideas/add').post(ideaCtrl.create);
router.route('/ideas/put/:id').put(ideaCtrl.update);
router.route('/ideas/delete/:id').delete(ideaCtrl.delete);
router.route('/ideas/getname').get(ideaCtrl.getName);
router.route('/ideas/getmaincategory').get(ideaCtrl.getMainCategory);
router.route('/ideas/gethashtags').get(ideaCtrl.getHashTags);
//

//Routes for experiences
var experienceCtrl = require('../controllers/experienceController.js');
router.route('/experiences').get(experienceCtrl.getAllExperiences);
router.route('/experiences/add').post(experienceCtrl.create);
router.route('/experiences/put/:id').put(experienceCtrl.update);
router.route('/experiences/delete/:id').delete(experienceCtrl.delete);
router.route('/experiences/getname').get(experienceCtrl.getName);
router.route('/experiences/getmaincategory').get(experienceCtrl.getMainCategory);
router.route('/experiences/getincludesandexcludes').get(experienceCtrl.getIncludesAndExcludes);
router.route('/experiences/gethashtags').get(experienceCtrl.getHashTags);

//Routes for sponsor
var sponsorCtrl = require('../controllers/sponsorController.js');
router.route('/sponsors').get(sponsorCtrl.getAllSponsors);
router.route('/sponsors/add').post(sponsorCtrl.create);
router.route('/sponsors/put/:id').put(sponsorCtrl.update);
router.route('/sponsors/delete/:id').delete(sponsorCtrl.delete);
router.route('/sponsors/getname').get(sponsorCtrl.getName);

//Routes for partner
var partnerCtrl = require('../controllers/partnerController.js');
router.route('/partners').get(partnerCtrl.getAllPartners);
router.route('/partners/add').post(partnerCtrl.create);
router.route('/partners/put/:id').put(partnerCtrl.update);
router.route('/partners/delete/:id').delete(partnerCtrl.delete);
router.route('/partners/getname').get(partnerCtrl.getName);

//Routes for venue
var venueCtrl = require('../controllers/venueController.js');
router.route('/venues').get(venueCtrl.getAllVenues);
router.route('/venues/add').post(venueCtrl.create);
router.route('/venues/put/:id').put(venueCtrl.update);
router.route('/venues/delete/:id').delete(venueCtrl.delete);
router.route('/venues/getname').get(venueCtrl.getName);
router.route('/venues/getmaincategory').get(venueCtrl.getMainCategory);
router.route('/venues/getamenities').get(venueCtrl.getAmenities);
router.route('/venues/getfilmmedium').get(venueCtrl.getFilmMedium);

//Routes for filmtitles
var filmTitleCtrl = require('../controllers/filmTitleController.js');
router.route('/filmtitles').get(filmTitleCtrl.getAllFilmTitles);
router.route('/filmtitles/add').post(filmTitleCtrl.create);
router.route('/filmtitles/put/:id').put(filmTitleCtrl.update);
router.route('/filmtitles/delete/:id').delete(filmTitleCtrl.delete);
router.route('/filmtitles/getname').get(filmTitleCtrl.getName);
router.route('/filmtitles/gethashtags').get(filmTitleCtrl.getHashTags);

//Routes for filmevents
var filmEventCtrl = require('../controllers/filmEventController.js');
router.route('/filmevents').get(filmEventCtrl.getAllFilmEvents);
router.route('/filmevents/add').post(filmEventCtrl.create);
router.route('/filmevents/put/:id').put(filmEventCtrl.update);
router.route('/filmevents/delete/:id').delete(filmEventCtrl.delete);
router.route('/filmevents/getmaincategory').get(filmEventCtrl.getMainCategory);
router.route('/filmevents/gethashtags').get(filmEventCtrl.getHashTags);

module.exports = router;