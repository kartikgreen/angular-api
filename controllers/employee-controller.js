var employeeModel = require('../models/employee-model');
module.exports = {
    //Get all employees
     getEmployees: function(req, res) {
        employeeModel.find({}, (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });    
    },   
    updateEmployee: function(req, res) {
        var id = req.params.id;
        console.log(id);
        employeeModel.findByIdAndUpdate(id, req.body, 
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
    //get one employee
    getAnEmployee: function(req, res) {
        var id = req.params.id;
        employeeModel.findById(id, (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });
    },   
    createEmployee: function(req, res) {
        var employee = new employeeModel(req.body);  
        employee.save(function(error, response) {
            console.log("employee form has been saved!");
            if (error) {
                res.json(error);
                console.error(error);
                return;  
            }   
        res.json(response);
        console.log(response);
        });             
    },
    deleteEmployee: function(req, res) {
        var id = req.params.id;
        employeeModel.remove({_id: id}, (err, data) => {
            if (err) {
                res.status(500).send(error); 
            } else {
                res.json(data);
            }         
        });
    }    
}