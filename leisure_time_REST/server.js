var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var router = express.Router();
var mongo = require('./model/mongodb');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));

app.get('/usrs', users.findAll);
app.listen(3000);
console.log('Listening on port 3000...');