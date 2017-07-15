var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors')
var expressValidator = require('express-validator');
var jwt = require('express-jwt');
var app = express();
//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var routes = require('./routes/routes.js');
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
var authCheck = jwt({
    secret: 'iA-RXI201idBzAC4XUaoGj1riNrwpttn3kSaEyGeYNu_9fBcAQHUe9WpQBpcdjAT',
    audience: 'cCuERVf4BI3O2wXZLSdkm5xuwD31dOZW'
});

app.use('/api/users', authCheck);

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
app.use('/', routes);
app.listen(9000, ()=>{
    console.log('server running on port  9000');
})