var mongoose = require('../shared/dbConfig.js');
var Schema = mongoose.Schema;
var employeeSchema = new Schema({
    employeeName: { type: String, required: true },
    summary: { type: String, required: true },    
    employeeWebsite: { type: String, required: true },   
    employeeFacebook: { type: String, required: true },
    employeeTwitter: { type: String, required: true },
    employeeInstagram: { type: String, required: true },    
 });
var employeeModel = mongoose.model("Employee", employeeSchema);
module.exports = employeeModel;