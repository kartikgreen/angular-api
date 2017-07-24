var partnerModel = require('../models/partnerModel');
module.exports = {
    //get all partners
     getAllPartners: function(req, res) {
        partnerModel.find({}, (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //get all names
    getName: (req, res)=>{
        partnerModel.find().distinct('name', (err, data) => {
            if (err) {
                res.status(500).send(error);
            } else {
                res.json(data);
            }
        });
    },
    //create single partner
    create: function(req, res) {
        var partner = new partnerModel(req.body);
        partner.save(function(error, response) {
            if (error) {
                res.json(error);
                console.error(error);
                return;
            }
            res.json(response);
            console.log(response);
        });
    },
    //update single partner
    update: function(req, res) {
        var id = req.params.id;
        partnerModel.findByIdAndUpdate(id, req.body,
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
    //delete single partner
    delete: function(req, res) {
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