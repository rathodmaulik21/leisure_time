var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var router = express.Router();
var mongoDbConfig = require('./model/mongodb');
var feeds = require('./model/feeds/insertUserFeed');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));

// use cors to handle cross Origin Request
// app.use(cors());
app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type,Accept');

    // Set to true if you need the website to include cookies in the requests sent to the API
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// app.get('/users', users.findAll);
app.get('/feeds', feeds.getFeeds);
app.post('/addFeed', feeds.insertFeeds);
app.patch('/updateFeeds', feeds.updateFeeds);
app.delete('/removeFeed', feeds.removeFeeds);

app.listen(3000);
console.log('Listening on port 3000...');