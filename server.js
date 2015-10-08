var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/store';

app.post('/users', function (req, res) {
	
	MongoClient.connect(url, function(err, db) {


        var collection = db.collection('users');

        collection.insert({name : 'Claus'}, function(err, result) {

                res.json({
                    "message": "user added"
                });
                db.close();
            
            
        });
    });

});


app.listen(3000);