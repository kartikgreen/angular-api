var venueModel = require('../models/venueModel');
module.exports = {
    //Get all venues
     getVenues: function(req, res) {
        venueModel.find({}, (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });    
    },
    //get distinct venue by main category
    getMainCategoryOfVenue: (req, res)=>{
        venueModel.find().distinct('mainCategory', (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });
    },
    updateVenue: function(req, res) {
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
    //get distinct venue by venueAmenities
    getVenueAmenitiesOfVenue: (req, res)=>{
        venueModel.find().distinct('amenities', (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });
    },
     //get distinct venue by venueFilmPlayback
     getFilmPlaybackOfVenue: (req, res)=>{
        venueModel.find().distinct('filmSettings.filmMedium', (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });
    },
    //get venue by name
    getVenueName: (req, res)=>{
        venueModel.find().distinct('name', (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });
    },     
    //get one venue
    getAnVenue: function(req, res) {
        var id = req.params.id;
        venueModel.findById(id, (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });
    },   
    createVenue: function(req, res) {
        var venue = new venueModel(req.body);  
        venue.save(function(error, response) {
            console.log("venue form has been saved!");
            if (error) {
                res.json(error);
                console.error(error);
                return;  
            }   
        res.json(response);
        console.log(response);
        });             
    },
    deleteVenue: function(req, res) {
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