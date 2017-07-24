var ideaModel = require('../models/ideaModel');
module.exports = {
    //get all ideas
    getAllIdeas: function(req, res) {
        ideaModel.find({}, (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //get all names
    getName: (req, res)=>{
        ideaModel.find().distinct('name', (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //get main categories
    getMainCategory: (req, res)=>{
        ideaModel.find().distinct('mainCategory', (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //get hashtags
    getHashTags: (req, res)=>{
        ideaModel.find().distinct('hashtags', (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //create single idea
    create: function(req, res) {
        var ideas = new ideaModel(req.body);
        ideas.save(function(error, response) {
            if (error) {
                res.json(error);
                console.error(error);
                return;
            }
            res.json(response);
            console.log(response);
        });
    },
    //update single idea
    update: function(req, res) {
        var id = req.params.id;
        ideaModel.findByIdAndUpdate(id, req.body,
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
    //delete single idea
    delete: function(req, res) {
        var id = req.params.id;
        ideaModel.remove({_id: id}, (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    }
}