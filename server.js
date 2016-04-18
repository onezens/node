
/*

	This file 'server.js' is server start up 服务器创建或者启动模块
*/


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

	http.createServer(onRequest).listen(8080);
	console.log("Server Starting.......");
}

exports.start = start;


/************  archiver for 2016-04-18
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

