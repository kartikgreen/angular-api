var experienceModel = require('../models/experienceModel');
module.exports = {
    //get all experiences
    getAllExperiences: function(req, res) {
        experienceModel.find({}, (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //get all names
    getName: (req, res)=>{
        experienceModel.find().distinct('name', (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //get all main categories
    getMainCategory: (req, res)=>{
        experienceModel.find().distinct('mainCategory', (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //get all hashtags
    getHashTags: (req, res)=>{
        experienceModel.find().distinct('hashtags', (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    // get all includes and excludes
    // union of includes and excludes as excludesAndExcludes
    getIncludesAndExcludes: (req, res)=>{
        console.log('called setunion');
        experienceModel.aggregate([
            // don't include documents that have no arrays
            { "$match": {
                "$or": [
                    { "includes.0": { "$exists": true } },
                    { "excludes.0": { "$exists": true } }
                ]
            }},
            // join the arrays and exclude the nulls
            { "$project": {
                "_id": 0,
                "list": {
                    "$setDifference": [
                        { "$setUnion": [
                            { "$ifNull": [ "$includes", [null] ] },
                            { "$ifNull": [ "$excludes", [null] ] }
                        ]},
                        [null]
                    ]
            }}},
            // unwind. By earlier conditions the array must have some entries
            {"$unwind": "$list" },
            // and $group on the list values as the key to produce distinct results
            {"$group": { "_id": "$list" }}
        ], (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                data = data.map( d => d._id );
                res.json(data);
            }
        })
    },
    //create single experience
    create: function(req, res) {
        var experience = new experienceModel(req.body);
        experience.save(function(error, response) {
            if (error) {
                res.json(error);
                console.error(error);
                return;
            }
            res.json(response);
            console.log(response);
        });
    },
    //update single experience
    update: function(req, res) {
        var id = req.params.id;
        experienceModel.findByIdAndUpdate(id, req.body,
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
    //detete single experience
    delete: function(req, res) {
        var id = req.params.id;
        experienceModel.remove({_id: id}, (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    }
}