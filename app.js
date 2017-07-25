var cors = require('cors')
var jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var app = express();
//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
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
//jwt config
const authCheck = jwt({
  // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://incredibleglobe.eu.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://incredibleglobe.eu.auth0.com/`,
  algorithms: ['RS256']
});
//protect experience api with authcheck
app.use('/experiences', authCheck);
app.use('/experiences/getname', authCheck);
app.use('/experiences/getmaincategory', authCheck);
app.use('/experiences/gethashtags', authCheck);
app.use('/experiences/getincludesandexcludes', authCheck);
app.use('/experiences/add', authCheck);
app.use('/experiences/put/:id', authCheck);
app.use('/experiences/delete/:id', authCheck);

// //protect ideas api with authcheck
app.use('/ideas', authCheck);
app.use('/ideas/getname', authCheck);
app.use('/ideas/getmaincategory', authCheck);
app.use('/ideas/gethashtags', authCheck);
app.use('/ideas/add', authCheck);
app.use('/ideas/put/:id', authCheck);
app.use('/ideas/delete/:id', authCheck);

//protect sponsor api with authcheck
app.use('/sponsors', authCheck);
app.use('/sponsors/getname', authCheck);
app.use('/sponsors/add', authCheck);
app.use('/sponsors/put/:id', authCheck);
app.use('/sponsors/delete/:id', authCheck);

//protect partner api with authcheck
app.use('/partners', authCheck);
app.use('/partners/getname', authCheck);
app.use('/partners/add', authCheck);
app.use('/partners/put/:id', authCheck);
app.use('/partners/delete/:id', authCheck);

//protect venue api with authcheck
app.use('/venues', authCheck);
app.use('/venues/getname', authCheck);
app.use('/venues/getmaincategory', authCheck);
app.use('/venues/getamenities', authCheck);
app.use('/venues/getfilmmedium', authCheck);
app.use('/venues/add', authCheck);
app.use('/venues/put/:id', authCheck);
app.use('/venues/delete/:id', authCheck);

//protect filmtitles api with authcheck
app.use('/filmtitles', authCheck);
app.use('/filmtitles/getname', authCheck);
app.use('/filmtitles/gethashtags', authCheck);
app.use('/filmtitles/add', authCheck);
app.use('/filmtitles/put/:id', authCheck);
app.use('/filmtitles/delete/:id', authCheck);

//protect filmevents api with authcheck
app.use('/filmevents', authCheck);
app.use('/filmevents/getmaincategory', authCheck);
app.use('/filmevents/gethashtags', authCheck);
app.use('/filmevents/add', authCheck);
app.use('/filmevents/put/:id', authCheck);
app.use('/filmevents/delete/:id', authCheck);

//Global vars
app.use(function(req, res, next){
    res.locals.errors = null;
    next();
});
//Express validator Middleware
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root = namespace.shift()
      , formParam = root;

    while(namespace.length) {
        formParam += '[' + namespace.shift() + ']';
    }
    return {
        param : formParam,
        msg   : msg,
        value : value
    };
  }
}));
module.exports = app;