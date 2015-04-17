


var jsonArr = [];
var namesArr = ['Gaurav', 'Vishal', 'Vandana', 'Nishit', 'Jahnvi', 'Yogesh'];

for (var i = 0; i < namesArr.length; i++) {
    var tmpl = {
        id: '',
        name: '',
        EL: {
            Acc: (x = Math.floor((Math.random() * 5) + 1)),
            Ava: (y = Math.floor((Math.random() * 5) + 1)),
            Bal: x - y
        },

        SK: {
            Acc: (x = Math.floor((Math.random() * 5) + 1)),
            Ava: (y = Math.floor((Math.random() * 5) + 1)),
            Bal: x - y
        },
        CL: {
            Acc: (x = Math.floor((Math.random() * 5) + 1)),
            Ava: (y = Math.floor((Math.random() * 5) + 1)),
            Bal: x - y
        },
        LW_Pay: {
            Acc: (x = Math.floor((Math.random() * 5) + 1)),
            Ava: (y = Math.floor((Math.random() * 5) + 1)),
            Bal: x - y
        },
        Holiday_Worked: {
            Acc: (x = Math.floor((Math.random() * 5) + 1)),
            Ava: (y = Math.floor((Math.random() * 5) + 1)),
            Bal: x - y
        },
        Paid_Time_Off: {
            Acc: (x = Math.floor((Math.random() * 5) + 1)),
            Ava: (y = Math.floor((Math.random() * 5) + 1)),
            Bal: x - y
        },
        Work_From_Home: {
            Acc: (x = Math.floor((Math.random() * 5) + 1)),
            Ava: (y = Math.floor((Math.random() * 5) + 1)),
            Bal: x - y
        },
        Paternity_Leave: {
            Acc: (x = Math.floor((Math.random() * 5) + 1)),
            Ava: (y = Math.floor((Math.random() * 5) + 1)),
            Bal: x - y
        },
        Bereavement_Leave: {
            Acc: (x = Math.floor((Math.random() * 5) + 1)),
            Ava: (y = Math.floor((Math.random() * 5) + 1)),
            Bal: x - y
        },
        WeddingDay_Leave: {
            Acc: (x = Math.floor((Math.random() * 5) + 1)),
            Ava: (y = Math.floor((Math.random() * 5) + 1)),
            Bal: x - y
        }
    }
    tmpl.name = namesArr[i];
    tmpl.id = "User" + (i + 1);
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
        db.collection('userData', function(err, coll) {                
                coll.insert(jsonArr, function(err) {
                    if (err) console.log(err);
                    else console.log('inserted data was success');
                    db.close();
                });
        });
    }
});