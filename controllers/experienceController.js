var experienceModel = require('../models/experienceModel');
module.exports = {
    //Get all experiences
     getExperiences: function(req, res) {
        experienceModel.find({}, (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });    
    },
    // union of includes and excludes as excludesAndExcludes
    getIncludesAndExcludes: (req, res)=>{
        console.log('called setunion');
        experienceModel.aggregate([
            // Don't include documents that have no arrays
            { "$match": { 
                "$or": [
                    { "includes.0": { "$exists": true } },
                    { "excludes.0": { "$exists": true } }
                ]
            }},
            // Join the arrays and exclude the nulls
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
            // Unwind. By earlier conditions the array must have some entries
            {"$unwind": "$list" },
            // And $group on the list values as the key to produce distinct results
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
    //get distinct experience by main category
    getMainCategoryByExperience: (req, res)=>{
        experienceModel.find().distinct('mainCategory', (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {               
                res.json(data);
            }         
        });
    },
    updateExperience: function(req, res) {
        var id = req.params.id;
        console.log(id);
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
    //get Hashtags
    getHashTags: (req, res)=>{
        experienceModel.find().distinct('hashtags', (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });
    },
    createExperience: function(req, res) {
        var experience = new experienceModel(req.body);  
        experience.save(function(error, response) {
            console.log("experience form has been saved!");
            if (error) {
                res.json(error);
                console.error(error);
                return;  
            }   
        res.json(response);
        console.log(response);
        });             
    },
    deleteExperience: function(req, res) {
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