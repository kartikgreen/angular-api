var express = require('express');
var router = express.Router();

//Routes for ideas
var ideaCtrl = require('../controllers/ideaController.js');
router.route('/ideas').get(ideaCtrl.getIdeas);
router.route('/ideas/getanidea/:id').get(ideaCtrl.getAnIdea);
router.route('/ideas/add').post(ideaCtrl.createIdeas);
router.route('/ideas/delete/:id').delete(ideaCtrl.deleteIdeas);
router.route('/ideas/getideabymaincategory').get(ideaCtrl.getIdeaByMainCategory);
router.route('/ideas/gethashtags').get(ideaCtrl.getHashTags);
router.route('/ideas/put/:id').put(ideaCtrl.updateIdea);
//
var users = [
  { id: 1, name: 'Todd Motto', image: 'image-1.jpg' },
  { id: 2, name: 'Brad Green', image: 'image-2.jpg' },
  { id: 3, name: 'Igor Minar', image: 'image-3.jpg' }
];
router.get('/api/users', function(req, res) {
  res.json(users);
});

//Routes for experiences
var experienceCtrl = require('../controllers/experienceController.js');
router.route('/experiences').get(experienceCtrl.getExperiences);
router.route('/experiences/getanexperience/:id').get(experienceCtrl.getAnExperience);
router.route('/experiences/getexperiencebymaincategory').get(experienceCtrl.getMainCategoryByExperience);
router.route('/experiences/getincludesandexcludes').get(experienceCtrl.getIncludesAndExcludes);
router.route('/experiences/gethashtags').get(experienceCtrl.getHashTags);
router.route('/experiences/add').post(experienceCtrl.createExperience);
router.route('/experiences/put/:id').put(experienceCtrl.updateExperience);
router.route('/experiences/delete/:id').delete(experienceCtrl.deleteExperience);

//Routes for sponsor
var sponsorCtrl = require('../controllers/sponsorController.js');
router.route('/sponsors').get(sponsorCtrl.getSponsors);
router.route('/sponsors/getsponsorname').get(sponsorCtrl.getSponsorName);
router.route('/sponsors/getansponsor/:id').get(sponsorCtrl.getAnSponsor);
router.route('/sponsors/add').post(sponsorCtrl.createSponsor);
router.route('/sponsors/put/:id').put(sponsorCtrl.updateSponsor);
router.route('/sponsors/delete/:id').delete(sponsorCtrl.deleteSponsor);

//Routes for partner
var partnerCtrl = require('../controllers/partnerController.js');
router.route('/partners').get(partnerCtrl.getPartners);
router.route('/partners/getpartnername').get(partnerCtrl.getPartnerName);
router.route('/partners/getapartner/:id').get(partnerCtrl.getAPartner);
router.route('/partners/add').post(partnerCtrl.createPartner);
router.route('/partners/delete/:id').delete(partnerCtrl.deletePartner);
router.route('/partners/put/:id').put(partnerCtrl.updatePartner);

//Routes for venue
var venueCtrl = require('../controllers/venueController.js');
router.route('/venues').get(venueCtrl.getVenues);
router.route('/venues/getvenuename').get(venueCtrl.getVenueName);
router.route('/venues/getanvenue/:id').get(venueCtrl.getAnVenue);
router.route('/venues/getMainCategoryOfVenue').get(venueCtrl.getMainCategoryOfVenue);
router.route('/venues/getAmenitiesOfVenue').get(venueCtrl.getVenueAmenitiesOfVenue);
router.route('/venues/getFilmPlaybackOfVenue').get(venueCtrl.getFilmPlaybackOfVenue);
router.route('/venues/add').post(venueCtrl.createVenue);
router.route('/venues/put/:id').put(venueCtrl.updateVenue);
router.route('/venues/delete/:id').delete(venueCtrl.deleteVenue);

//Routes for filmtitles
var filmTitleCtrl = require('../controllers/filmTitleController.js');
router.route('/filmtitles').get(filmTitleCtrl.getAllFilmTitle);
router.route('/filmtitles/getfilmtitle/:id').get(filmTitleCtrl.getFilmTitle);
router.route('/filmtitles/gethashtags').get(filmTitleCtrl.getHashTags);
router.route('/filmtitles/add').post(filmTitleCtrl.createFilmTitle);
router.route('/filmtitles/delete/:id').delete(filmTitleCtrl.deleteFilmTitle);
router.route('/filmtitles/getfilmtitlesname').get(filmTitleCtrl.getFilmTitlesName);
router.route('/filmtitles/put/:id').put(filmTitleCtrl.updateFilmTitle);

//Routes for filmevents
var filmEventCtrl = require('../controllers/filmEventController.js');
router.route('/singlefilmevents').get(filmEventCtrl.getAllFilmEvent);
router.route('/singlefilmevents/getsinglefilmevent/:id').get(filmEventCtrl.getFilmEvent);
router.route('/singlefilmevents/gethashtags').get(filmEventCtrl.getHashTags);
router.route('/singlefilmevents/add').post(filmEventCtrl.createFilmEvent);
router.route('/singlefilmevents/put/:id').put(filmEventCtrl.updateFilmEvent);
router.route('/singlefilmevents/delete/:id').delete(filmEventCtrl.deleteFilmEvent);
router.route('/singlefilmevents/getfilmeventsbymaincategory').get(filmEventCtrl.getMainCategoryByFilmEvents);

module.exports = router;