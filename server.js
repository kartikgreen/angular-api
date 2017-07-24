var routes = require('./routes/routes.js');
var app = require('./app.js');
app.use('/', routes);
app.listen(9000, ()=>{
    console.log('server running on port 9000');
})