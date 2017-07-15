var ideaModel = require('../models/ideaModel');
module.exports = {
     getIdeas : function(req, res) {
        ideaModel.find({}, (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });    
    },
     //get one idea
    getAnIdea: function(req, res) {
        var id = req.params.id;
        ideaModel.findById(id, (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });
    },
    updateIdea: function(req, res) {
        var id = req.params.id;
        console.log(id);
        ideaModel.findByIdAndUpdate(id, req.body, 
            { overwrite: true, new: true }, (error, response) => {            
            if (error) {
                res.json(error);
                console.error(error);
                return;  
            }
            console.log("idea form has been updated!");   
            res.json(response);
            console.log(response);
       });
    },
    //get distinct idea by main category
    getIdeaByMainCategory: (req, res)=>{
        ideaModel.find().distinct('mainCategory', (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {               
                res.json(data);
            }         
        });
    },
    //get Hashtags
    getHashTags: (req, res)=>{
        ideaModel.find().distinct('hashtags', (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });
    }, 
    createIdeas : function(req, res) {
        var ideas = new ideaModel(req.body);  
        ideas.save(function(error, response) {
            console.log("user from form has been saved!");
            if (error) {
                res.json(error);
                console.error(error);
                return;  
            }   
        res.json(response);
        console.log(response);
        });             
    },
    deleteIdeas: function(req, res) {
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