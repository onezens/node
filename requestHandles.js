
/*
	This file is module for request 处理请求的模块
*/


/** handle post request
 */

var querystring = require("querystring"),
    fs = require("fs");

function start(response, postData) {

    console.log("Request handler start was called!");

    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="content-type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<textarea name = "text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Submit text" />' +
        '</form>' +
        '</body>' +
        '</html>';

    response.writeHead(200, {"content-type" : "text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData) {

    console.log("Request handler upload was called.");

    response.writeHead(200, {"content-type" : "text/plain"});
    response.write("you have send the text: " + querystring.parse(postData).text);
    response.end();
}

function show(response, postData) {
    console.log("Request handler show was called!");
    //warn: 路径前面加 . 表示根目录，否则会报错文件找不到
    fs.readFile("./tmp/test.jpg", "binary", function(error, file){

        if(error) {
            response.writeHead(500, {"content-type": "text/plain"});
            response.write(error + "\n");
            response.end();
        }else {
            response.writeHead(200, {"content-type" : "image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
}


exports.start = start;
exports.upload = upload;
exports.show = show;

/************  archiver for 2016-04-20  ************
var queryString = require("querystring");


function start(response, postData) {

    console.log("Request handler start was called! ");

    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="content-type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<textarea name = "text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Submit text" />' +
        '</form>' +
        '</body>' +
        '</html>';

    response.writeHead(200, {"content-type" : "text/html"});
    response.write(body);
    response.end();
}
function upload(response, postData) {

    console.log("The request for 'Upload' was called! ");
    response.writeHead(200, {"content-type" : "text/plain"});
    //通过querySting 来取数据
    response.write("you have sent: " + queryString.parse(postData).text);

    response.end();
}

//申明外部接口
exports.start = start;
exports.upload = upload;

/** 耗时操作处理  ***
var exec = require("child_process").exec;

function start(response) {

    console.log("Request for start was called!");
    var content = "empty";

    // ls -lah 输出根目录的文件  find / 遍历输出根磁盘的第一个文件路径
    exec("find /", {timeout: 10000, maxBuffer: 20000*1024},function (error, stdout, stderr){

            response.writeHead(200, {"content-type": "text/plain"});
            response.write(stdout);
            response.end();
        }
    );
}


function upload(response) {

    console.log("The request for 'Upload' was called! ");
    response.writeHead(200, {"content-type" : "text/plain"});
    response.write("Hello upload!");
    response.end();
}

//申明外部接口
exports.start = start;
exports.upload = upload;

/************  archiver for 2016-04-19  ************

function start() {

	console.log("The request for 'start' was called! ");

	function sleep(msec) { //当前线程等待msec毫秒

		var startTime = new Date().getTime();
		while(new Date().getTime()<startTime + msec);
	}
	sleep(1000); //等待10s
	return "Hello start"; //返回执行结果
}

function upload() {

	console.log("The request for 'Upload' was called! ");
	return "Hello upload";
}

//申明外部接口
exports.start = start;
exports.upload = upload;


/************   archiver for 2016-04-18
function start() {

	console.log("Request handle, start was called!");
	return "Hello Start";
}

function upload(){

	console.log("Request handle, upload was called!");
	return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
*/