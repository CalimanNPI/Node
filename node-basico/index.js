/*const math = require('./maht');
console.log(math.add(1,2));*/

/*const os = require('os');
const fs = require('fs');
const http = require('http');

console.log(os.totalmem());
console.log(os.type());
console.log(os.uptime());

fs.writeFile('./texto.txt', 'linea uno', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Archivo creado');
});
fs.readFile('./texto.txt', function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

/**http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type':'text/html'});
    res.write('<h1>Holi</h1>');
    res.end();
}).listen(3000);*/

/*const hanhleserver = function (rq, res) {
    res.writeHead(200, {'Content-type':'text/html'});
    res.write('<h1>Holi</h1>');
    res.end();
}

const server = http.createServer(hanhleserver);

server.listen(3000, function(){
    console.log("server on port 3000");
});*/

const express = require('express');
const colors = require('colors');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Holi mundito</h1>');
});
app.get('/morro', (req, res) => {
    res.send('morrillo');
});
app.get('/loco', (req, res) => {
    res.send('loco');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`.bgCyan);
});

