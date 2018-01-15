// var event = require('events'); 
// var hello = require('./hello');

// var eventEmitter = new event.EventEmitter();
// eventEmitter.on('some_event', function() {
//     console.log('some_event 事件触发');
// });
// setTimeout(function() {
//     // eventEmitter.emit('some_event');
// }, 1000);

// // var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
// var listListenerCount = require('events').EventEmitter.listenerCount(eventEmitter,'some_event');
// // console.log(listListenerCount);

// // console.log(require);
// // console.log(exports);
// var http  = require('http');
// // console.log(http);

// // console.log(hello.getName())


// function say(word){
// 	console.log(word);
// }

// function execute(fn,value){
// 	fn(value);
// }

// execute(say,'hello');
// var http = require("http");
// var url = require("url");
 
// function start(route) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log(request.url)
//     console.log("Request for " + pathname + " received.");
 
//     route(pathname);
 
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
//   }
 
//   http.createServer(onRequest).listen(388);
//   console.log("Server has started.");
// }
 
// exports.start = start;
// var a = 112;
// console.time('aa');
// console.error(__filename,__dirname);
// console.trace();

// var http = require('http');

// http.createServer(function (request, response) {

//     // 发送 HTTP 头部 
//     // HTTP 状态值: 200 : OK
//     // 内容类型: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});

//     // 发送响应数据 "Hello World"
//     response.end('Hello Wo11rld\n');

// }).listen(8088);
	// console.log(process)


var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request,response){

	var pathname = url.parse(request.url).pathname;
	console.log(pathname);
	fs.readFile('./index.html',function(err,data){
		if(err){
			console.log(err);
			response.writeHead(404,{'Content-Type': 'text/html'});
		}else{
			response.writeHead(200,{'Content-Type': 'text/html'});
			response.write(data.toString());
		}

		response.end();
	});

}).listen(8888);
console.log('run start');