var jsonArr = [];
var namesArr = ['Gaurav', 'Vishal', 'Vandana', 'Nishit', 'Jahnvi', 'Yogesh'];

for (var i = 0; i < namesArr.length; i++) {
    var tmpl = {
        userId: '',
        name: '',
        requestDate: '07/02/2015',
        leaveType: 'Wdding Day Leave',
        leaveFrom: '09/02/2015',
        leaveTo: '09/02/2015',
        days: 1,
        authorizer: 'Admin',
        status: 'Pending'
    }
    tmpl.name = namesArr[i];
    tmpl.userId = "User" + (i + 1);
    jsonArr.push(tmpl);
}

var http = require('http');
var mongo = require('mongodb');
Server = mongo.Server;
Db = mongo.Db;
var server = new Server('localhost', 27017, { auto_reconnect: true });
var database = new Db('logins', server);
database.open(function(err, db) {
    if (!err) {
        console.log("connected");
        db.collection('memoirData', function(err, coll) {
            coll.insert(jsonArr, function(err) {
                if (err) console.log(err);
                else console.log('inserted data was success');
                db.close();
            });
        });
    }
});