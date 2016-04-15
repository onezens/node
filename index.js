//invoke server module
var server = require("./server.js");
var router = require("./router.js");
var requestHandles = require("./requestHandles.js");

var handle = {}
handle["/"] = requestHandles.start;
handle["/start"] = requestHandles.start;
handle["/upload"] = requestHandles.upload;

server.start(router.route, handle);
