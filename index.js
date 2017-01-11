var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = "postgres://postgres:Kmalone32@localhost:4000/roc_exchange";
var massiveInstance = massive.connectSync({connectionString : connectionString});
var app = module.exports = express();
var endpointCtrl = require('./endpointCtrl.js');
var port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set('db', massiveInstance);
app.use(cors());



app.listen(port, function() {
  console.log("port " + port + " is listening...");
});
