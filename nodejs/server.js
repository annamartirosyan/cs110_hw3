const http = require('http');
http.createServer (function(req, res) {
	if(req.url === '/cs/programming') {
		res.writeHead(200, {'Content-Type' : 'text/plain'})
		res.end('Hello! We have just learnt how to use node.js!!!\n');
	}	else if(req.url === '/cs/programming/node') {
		res.writeHead(200, {'Content-Type' : 'text/plain'})
		res.end('What Is Node.Js ?\n');
	}	else if(req.url === '/cs/programming/node/js') {
		res.writeHead(200, {'Content-Type' : 'text/plain'})
		res.end('Node.js is a JavaScript runtime environment for developing a diverse variety of tools and applications. \n');
	}	else if(req.url === '/hw3') {
		res.writeHead(200, {'Content-Type' : 'text/plain'})
		res.end('Homework #3 Done :)\n');
	}	else if(req.url === '/hw3/finished') {
		res.writeHead(200, {'Content-Type' : 'text/plain'})
		res.end('That is all for this time!!!\n');
	}	else {
		res.writeHead(404, {'Content-Type' : 'text/plain'})
		res.end('Page is not found!\n');
	}
}).listen(3001);
