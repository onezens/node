

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/test';
var DB = null;
var UserTableName = "users";


/*** user operation ****/

function addUser(name, pwd) {


}

/*** test operation ****/

var insertData = function(db, callback) {
    //连接到表
    var collection = db.collection(UserTableName);
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

var selectData = function (db, callback) {
    //连接到表
    var collection = db.collection(UserTableName);
    //查询数据
    var whereStr = {"name": 'zhen'};
    collection.find(whereStr).toArray(function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
};

var updateData = function(db, callback) {
    //连接到表
    var collection = db.collection(UserTableName);
    //更新数据
    var whereStr = {"name":'zhen'};
    var updateStr = {$set: { "password" : "123" }};
    collection.update(whereStr,updateStr, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        callback(result);
    });
}

var delData = function(db, callback) {
    //连接到表
    var collection = db.collection(UserTableName);
    //删除数据
    var whereStr = {"name":'zhen'};
    collection.remove(whereStr, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        callback(result);
    });
}

/*
var invokeProcData = function(db, callback) {
    //存储过程调用
    db.eval('get_tb2_count()', function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        callback(result);
    });
}
*/


function connectDB() {

    MongoClient.connect(DB_CONN_STR, function(err, db) {
        DB = db;
        console.log("连接成功！");
        deleteInfo();
    });
}


function deleteInfo() { //全部删除

    delData(DB, function(result){

        console.log(result);
    })
}

function update() { //更新第一条

    updateData(DB, function(result){

        console.log(result);
    })
}

function find() { //查找数据


    selectData(DB, function(result){

        console.log(result);
    })
}


function insert() { //添加数据

    insertData(DB, function(result){

        console.log(result);
    })
}

exports.connectionDB = connectDB;
exports.insert = insert;