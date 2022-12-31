//const os = require('os');//utilizacion de modulos de node.js

//console.log(os.platform());

/**const fs = require('fs');

fs.writeFile('text.txt', 'linea uno', function (err) {
	if(err){
		console.log(err);
	}
	console.log('Archivo creeado');
})

fs.readFile('text.txt', function (err, data){
if(err){
console.log(err);
}
console.log(data.toString());
}) es te el modulo de manejo de archivos de node

const http = require('http');

const  handleserver = function (req, res) {
	res.writeHead(200, {'Content-type': 'text/html'});
	res.write('esto es un simple texto');
	res.end();
}

const  server = http.createServer(handleserver);
server.listen(3000, function () {
	console.log('server on port 3000');
})*/

const express = require('express');

const server = express();
server.get('/', function (req, res) {
	res.send('Hola');
	res.end();
});

server.listen(3000, () =>{
	console.log('server');
})