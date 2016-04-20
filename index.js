/*
	This file 'index.js' is home for this server 服务器访问入口模块
*/

var server = require("./server.js");
var router = require("./router.js");
var requestHandles = require("./requestHandles.js");

var handle = {}
handle["/"] = requestHandles.start;
handle["/start"] = requestHandles.start;
handle["/upload"] = requestHandles.upload;
handle["/show"] = requestHandles.show;

server.start(router.route, handle);


/************   archiver for 2016-04-18
//invoke server module
var server = require("./server.js");
var router = require("./router.js");
var requestHandles = require("./requestHandles.js");

var handle = {}
handle["/"] = requestHandles.start;
handle["/start"] = requestHandles.start;
handle["/upload"] = requestHandles.upload;

server.start(router.route, handle);
*/
