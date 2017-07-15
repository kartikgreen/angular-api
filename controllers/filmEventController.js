var filmEventModel = require('../models/filmEventModel');
module.exports = {
    //Get all filmEvents
     getAllFilmEvent: function(req, res) {
        filmEventModel.find({}, (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });    
    },    
    //get Hashtags
    getHashTags: (req, res)=>{
        filmEventModel.find().distinct('hashtags', (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });
    },
    //get distinct main category of filmevents 
    getMainCategoryByFilmEvents: (req, res)=>{
        filmEventModel.find().distinct('mainCategory', (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {               
                res.json(data);
            }         
        });
    },
    updateFilmEvent: function(req, res) {
        var id = req.params.id;
        filmEventModel.findByIdAndUpdate(id, req.body, 
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
    //get one filmEvent
    getFilmEvent: function(req, res) {
        var id = req.params.id;
        filmEventModel.findById(id, (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });
    },   
    createFilmEvent: function(req, res) {
        var filmEvent = new filmEventModel(req.body);  
        filmEvent.save(function(error, response) {
            if (error) {
                res.json(error);
                console.error(error);
                return;  
            }   
            res.json(response);
            console.log(response);
        });             
    },

    deleteFilmEvent: function(req, res) {
        var id = req.params.id;
        filmEventModel.remove({_id: id}, (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });
    }    
}