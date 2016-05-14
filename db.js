

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/test';
var DB = null;

var insertData = function(db, callback) {
    //连接到表
    var collection = db.collection('users');
    //插入数据
    var data = [{"name":"zhen","password" : "zhen"},{"name":"wilson002","password":"zhen"}];
    collection.insert(data, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        callback(result);
    });
}


function connectDB() {

    MongoClient.connect(DB_CONN_STR, function(err, db) {
        DB = db;
        console.log("连接成功！");
        insert();
    });
}

function insert() {

    insertData(DB, function(result){

        console.log(result);
    })
}

exports.connectionDB = connectDB;
exports.insert = insert;