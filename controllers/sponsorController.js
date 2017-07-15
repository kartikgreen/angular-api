var sponsorModel = require('../models/sponsorModel');
module.exports = {
    //Get all sponsors
     getSponsors: function(req, res) {
        sponsorModel.find({}, (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });    
    },   
    //get one sponsor
    getAnSponsor: function(req, res) {
        var id = req.params.id;
        sponsorModel.findById(id, (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });
    },
    updateSponsor: function(req, res) {
        var id = req.params.id;
        console.log(id);
        sponsorModel.findByIdAndUpdate(id, req.body, 
            { overwrite: true, new: true }, (error, response) => {            
            if (error) {
                res.json(error);
                return;  
            }
            res.json(response);
            console.log(response);
       });
    },
    //get sponsor by name
    getSponsorName: (req, res)=>{
        sponsorModel.find().distinct('name', (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });
    },   
    createSponsor: function(req, res) {
        var sponsor = new sponsorModel(req.body);  
        sponsor.save(function(error, response) {
            console.log("sponsor form has been saved!");
            if (error) {
                res.json(error);
                console.error(error);
                return;  
            }   
        res.json(response);
        console.log(response);
        });             
    },
    deleteSponsor: function(req, res) {
        var id = req.params.id;
        sponsorModel.remove({_id: id}, (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });
    }    
}