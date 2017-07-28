var mongoose = require('mongoose');
var dbHost = 'mongodb://localhost:27017/employee';
mongoose.connect(dbHost);
module.exports = mongoose;