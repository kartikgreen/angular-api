var partnerModel = require('../models/partnerModel');
module.exports = {
    //Get all partners
     getPartners: function(req, res) {
        partnerModel.find({}, (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });    
    },   
    //get one partner
    getAPartner: function(req, res) {
        var id = req.params.id;
        partnerModel.findById(id, (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });
    },
    updatePartner: function(req, res) {
        var id = req.params.id;
        console.log(id);
        partnerModel.findByIdAndUpdate(id, req.body, 
            { overwrite: true, new: true }, (error, response) => {            
            if (error) {
                res.json(error);
                console.error(error);
                return;  
            }
            console.log("Partner form has been updated!");   
            res.json(response);
            console.log(response);
       });
    },
    //get partner by name
    getPartnerName: (req, res)=>{
        partnerModel.find().distinct('name', (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });
    },   
    createPartner: function(req, res) {
        var partner = new partnerModel(req.body);  
        partner.save(function(error, response) {
            console.log("partner form has been saved!");
            if (error) {
                res.json(error);
                console.error(error);
                return;  
            }   
        res.json(response);
        console.log(response);
        });             
    },
    deletePartner: function(req, res) {
        var id = req.params.id;
        partnerModel.remove({_id: id}, (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });
    }    
}