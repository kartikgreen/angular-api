var venueModel = require('../models/venueModel');
module.exports = {
    //get all venues
    getAllVenues: function(req, res) {
        venueModel.find({}, (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //get all names
    getName: (req, res)=>{
        venueModel.find().distinct('name', (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //get all main categories
    getMainCategory: (req, res)=>{
        venueModel.find().distinct('mainCategory', (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //get all amenities
    getAmenities: (req, res)=>{
        venueModel.find().distinct('amenities', (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //get all film medium
    getFilmMedium: (req, res)=>{
        venueModel.find().distinct('filmSettings.filmMedium', (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //create single venue
    create: function(req, res) {
        var venue = new venueModel(req.body);
        venue.save(function(error, response) {
            if (error) {
                res.json(error);
                console.error(error);
                return;
            }
            res.json(response);
            console.log(response);
        });
    },
    //update single venue
    update: function(req, res) {
        var id = req.params.id;
        venueModel.findByIdAndUpdate(id, req.body,
            { overwrite: true, new: true }, (error, response) => {
            if (error) {
                res.json(error);
                console.error(error);
                return;
            }
            res.json(response);
            console.log(response);
       });
    },
    //delete single venue
    delete: function(req, res) {
        var id = req.params.id;
        venueModel.remove({_id: id}, (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    }
}