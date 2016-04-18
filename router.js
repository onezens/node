/*
	This file 'route.js' is interface for access 访问点
*/


function route(handle, pathname) {

	console.log("About to route a request for " + pathname);

	if(typeof handle[pathname] == 'function') {
		handle[pathname]();
	}else {
		console.log("No request handle found for " + pathname);
	}
}

exports.route = route;

/************  archiver for 2016-04-18
function route(handle, pathname) {

	console.log("********* " + pathname + " ************");
	console.log("About to route a request for" + pathname);

	if(typeof handle[pathname] == 'function') {
		handle[pathname]();
	}else {
		console.log("No request handler found for " + pathname);
		return "404 Not Found!";
	}
}

exports.route = route;
*/
