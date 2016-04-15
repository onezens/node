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