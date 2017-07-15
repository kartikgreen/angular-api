var mongoose = require('mongoose');
var dbHost = 'mongodb://ig-controlpanel:aXrQNXnSR6GIv7kc@incredibleglobe-alpha-shard-00-00-ypfeu.mongodb.net:27017,incredibleglobe-alpha-shard-00-01-ypfeu.mongodb.net:27017,incredibleglobe-alpha-shard-00-02-ypfeu.mongodb.net:27017/ig-controlpanel?ssl=true&replicaSet=IncredibleGlobe-Alpha-shard-0&authSource=admin'
mongoose.Promise = global.Promise;
mongoose.connect(dbHost);
module.exports = mongoose;