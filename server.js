
/*

	This file 'server.js' is server start up 服务器创建或者启动模块
*/



var http = require("http");
var url = require("url");
var db = require("./db.js");

function start(route, handle) {

    function onRequest(req, res) { //接收到请求
        var pathname = url.parse(req.url).pathname; //获取url的请求路径
        console.log("Request for " + pathname + " Received! ");

        route(handle, pathname, res, req);
    }

    http.createServer(onRequest).listen(8081);
    console.log("Server Starting.......");
//    db.connectionDB();
//    db.insert();
}

exports.start = start;


//var formidable = require('formidable'),
//    http = require('http'),
//    sys = require('sys');
//
//http.createServer(function(req, res){
//
//    if(req.url == "/upload" && req.method.toLowerCase() == 'post') {
//        //parse a file upload
//        var form = new formidable.IncomingForm();
//        form.parse(req, function(err, fields, files){
//
//            res.writeHead(200, {"content-type" : "text/plain"});
//            res.write("received upload:\n\n");
//            res.end(sys.inspect({fields: fields, files: files}));
//        });
//        return;
//    }
//
//    res.writeHead(200, {"content-type" : "text/html"});
//    res.end(
//        '<form action="/upload" enctype="multipart/form-data" ' +
//            'method="post">' +
//            '<input type="text" name="title"><br>' +
//            '<input type="file" name="upload" multiple="multiple"><br>' +
//            '<input type="submit" value="upload">'  +
//            '</form>'
//    );
//}).listen(8080);


/************  archiver for 2016-04-20  ************


var http = require("http");
var url = require("url");
function start(route, handle) {

    function onRequest(req, res) { //接收到请求
        var postData = "";
        var pathname = url.parse(req.url).pathname; //获取url的请求路径
        console.log("Request for " + pathname + " Received! ");

        req.setEncoding("utf8");

        req.addListener("data", function(postDataChunk){ //传输数据
            postData += postDataChunk;
            console.log("Received Post Data chunk ** " + postDataChunk + " **");
        });

        req.addListener("end", function(){
            //数据接收完毕之后处理请求
            route(handle, pathname, res, postData);
        })


    }

    http.createServer(onRequest).listen(8081);
    console.log("Server Starting.......");
}

exports.start = start;




/************  archiver for 2016-04-19  ************

var http = require("http");
var url = require("url");
function start(route, handle) {

	function onRequest(req, res) {

		var pathname = url.parse(req.url).pathname; //获取url的请求路径
		console.log("Request for " + pathname + " Received! ");
		var content = route(handle, pathname);

		res.writeHead(200, {"content-type" : "text/plain"});
		res.write("<h1>Hello World!</h1>");
		res.write(content); //响应执行结果
		res.end()
	}

	http.createServer(onRequest).listen(8081);
	console.log("Server Starting.......");
}

exports.start = start;


/************  archiver for 2016-04-18  ************
//judge url paragrma

var http = require("http");
var url = require("url");
function start(route, handle) {

	function onRequest(req, res) {
		var pathname = url.parse(req.url).pathname;
		console.log("Request for " + pathname + " received!");
		var content = route(handle, pathname);
		console.log(content);
		res.writeHead(200, {"content-type" : "text/plain"});
		res.write(content);
		res.end();
	}

	http.createServer(onRequest).listen(8080);
	console.log("Server has started!");
}

exports.start = start;
*/


//start server function 4
/*
var http = require("http");

function start() {
	function onRequest(req, res) {

		console.log("request has received!")
		res.writeHead(200, {"content-type" : "text/plain"});
		res.write("Hello World!");
		res.end();

	}
	http.createServer(onRequest).listen(8080);
	console.log("Server has started!");
}

exports.start = start;
*/


// print log for response 3

/*
var http = require("http")

function onRequest(req, res) {

	console.log("request have receive");
	res.writeHead(200, {"content-type" : "text/plain"});
	res.write("Hello World");
	res.end();
}

http.createServer(onRequest).listen(8080);

console.log("server has started.");
*/


// create func for create server 2
/*
var http = require("http")

function onRequest(req, res) {

	res.writeHead(200, {"content-type" : "text/plain"});
	res.write("Hello World!");
	res.end();
}


http.createServer(onRequest).listen(8080);
*/


//create  http server 1

/*
var http = require("http")
http.createServer(function(req, res) {
	res.writeHead(200, {"content-type" : "text/plain"});
	res.write("Hello World!");
	res.end();
}).listen(8080);
*/

