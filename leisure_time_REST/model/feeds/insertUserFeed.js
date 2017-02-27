exports.getFeeds = function(req, res) {
    db.collection('userFeeds', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.insertFeeds = function(req, res) {
    // res.header("Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept");
    db.collection('userFeeds', function(err, collection) {
        var userFeedData = req.body;
        collection.insert(userFeedData, function(err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem adding the information to the database.");
            } else {
                res.status(201).json({ 'success': 'success' });
                // res.redirect("/feeds");
            }
        });
    });
};