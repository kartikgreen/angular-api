var filmTitleModel = require('../models/filmTitleModel');
module.exports = {
    //Get all filmTitles
     getAllFilmTitle: function(req, res) {
        filmTitleModel.find({}, (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });    
    },    
    //get Hashtags
    getHashTags: (req, res)=> {
        filmTitleModel.find().distinct('hashtags', (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });
    },
    updateFilmTitle: function(req, res) {
        var id = req.params.id;
        console.log(id);
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
    //get film title by name
    getFilmTitlesName: (req, res)=>{
        filmTitleModel.find().distinct('filmTitle', (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });
    },   
    createFilmTitle: function(req, res) {
        var filmTitle = new filmTitleModel(req.body);  
        filmTitle.save(function(error, response) {
            console.log("filmTitle form has been saved!");
            if (error) {
                res.json(error);
                console.error(error);
                return;  
            }   
        res.json(response);
        console.log(response);
        });             
    },
    deleteFilmTitle: function(req, res) {
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