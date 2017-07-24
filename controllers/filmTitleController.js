var filmTitleModel = require('../models/filmTitleModel');
module.exports = {
    //Get all film titles
     getAllFilmTitles: function(req, res) {
        filmTitleModel.find({}, (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //get all hashtags
    getHashTags: (req, res)=> {
        filmTitleModel.find().distinct('hashtags', (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //get all names
    getName: (req, res)=>{
        filmTitleModel.find().distinct('name', (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //create single film title
    create: function(req, res) {
        var filmTitle = new filmTitleModel(req.body);
        filmTitle.save(function(error, response) {
            if (error) {
                res.json(error);
                console.error(error);
                return;
            }
            res.json(response);
            console.log(response);
        });
    },
    //update single film title
    update: function(req, res) {
        var id = req.params.id;
        filmTitleModel.findByIdAndUpdate(id, req.body,
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
    //delete single film title
    delete: function(req, res) {
        var id = req.params.id;
        filmTitleModel.remove({_id: id}, (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    }
}