var cors = require('cors')
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var app = express();
//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
var originsWhitelist = [
  'http://localhost:4200'      //allowed front-end url for development
];
var corsOptions = {
  origin: function(origin, callback){
      var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
      callback(null, isWhitelisted);
  },
  credentials:true
}
app.use(cors(corsOptions));
//Global vars
app.use(function(req, res, next){
    res.locals.errors = null;
    next();
});
module.exports = app;