var express = require('express');
var router = express.Router();
//Routes for employees
var employeeCtrl = require('../controllers/employee-controller.js');
router.route('/employees').get(employeeCtrl.getEmployees);
router.route('/employees/getanemployee/:id').get(employeeCtrl.getAnEmployee);
router.route('/employees/add').post(employeeCtrl.createEmployee);
router.route('/employees/put/:id').put(employeeCtrl.updateEmployee);
router.route('/employees/delete/:id').delete(employeeCtrl.deleteEmployee);
module.exports = router;