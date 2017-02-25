var mongo = require('mongodb');
var assert = require('assert');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 3311, { auto_reconnect: true });
db = new Db('leisureTimeDB', server);

db.open(function(err, db) {

    db.authenticate('leisureTimeAdmin', 'karan123', function(err, result) {
        assert.equal(true, result);
        console.log("authentication :" + result);
        // db.close();
    });
    if (!err) {
        console.log("Connected to 'leisureTimeDB' database");
        db.collection('users', { strict: true }, function(err, collection) {
            if (err) {
                console.log("The 'users' collection doesn't exist. Creating it with sample data...");
                // populateDB();
            }
        });
    }
});
/*
exports.findAll = function(req, res) {
    db.collection('users', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
}; */