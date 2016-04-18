
/*
	This file is module for request 处理请求的模块
*/

function start() {

	console.log("The request for 'start' was called! ");
}

function upload() {

	console.log("The request for 'Upload' was called! ");
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