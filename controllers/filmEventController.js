var filmEventModel = require('../models/filmEventModel');
module.exports = {
    //get all film events
     getAllFilmEvents: function(req, res) {
        filmEventModel.find({}, (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //get all main categories
    getMainCategory: (req, res)=>{
        filmEventModel.find().distinct('mainCategory', (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //get all hashTags
    getHashTags: (req, res)=>{
        filmEventModel.find().distinct('hashTags', (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //create single film event
    create: function(req, res) {
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
    //update single film event
    update: function(req, res) {
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
    //delete single film event
    delete: function(req, res) {
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