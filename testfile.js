var ideaModel = require('../models/ideaModel');
module.exports = {
    getIdeas : function(req, res) {
        ideaModel.find({}, (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.render('index', {
                title: 'ideas',
                ideas: data,
                });
            }         
        });    
    },
    createIdeas : function(req, res) {
        req.checkBody('first_name', 'first name is required').notEmpty();
        var errors = req.validationErrors();
        if (errors) {
            ideaModel.find({}, (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.render('index', {
                ideas: data,
                errors: errors
                });
            }         
            });
        } else {
            var newIdea = {
            first_name: req.body.first_name,
            last_name:  req.body.last_name,
            email: req.body.email,
        }
        var ideas = new ideaModel(newIdea);  
        ideas.save(function(error, response) {
        console.log("user from form has been saved!");
        if (error) {
            console.error(error);  
        }   
        res.sendStatus(200);
        });
        }  
    }
}