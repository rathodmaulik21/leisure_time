var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 3311, { auto_reconnect: true });
db = new Db('leisureTimeDB', server);

db.open(function(err, db) {
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
exports.findAll = function(req, res) {
    db.collection('users', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};