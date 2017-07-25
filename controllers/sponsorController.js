var sponsorModel = require('../models/sponsorModel');
module.exports = {
    //get all sponsors
    getAllSponsors: function(req, res) {
        sponsorModel.find({}, (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //get all names
    getName: (req, res)=>{
        sponsorModel.find().distinct('name', (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //create single sponsor
    create: function(req, res) {
        var sponsor = new sponsorModel(req.body);
        sponsor.save(function(error, response) {
            if (error) {
                res.json(error);
                console.error(error);
                return;
            }
            res.json(response);
            console.log(response);
        });
    },
    //update single sponsor
    update: function(req, res) {
        var id = req.params.id;
        sponsorModel.findByIdAndUpdate(id, req.body,
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
    //delete single sponsor
    delete: function(req, res) {
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