
/*
	This file is module for request 处理请求的模块
*/

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