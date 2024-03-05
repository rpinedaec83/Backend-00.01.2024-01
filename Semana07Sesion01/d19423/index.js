let http = require('http');

http.createServer(function (req, res) {
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('<h1>Hola desde NodeJs!</h1>');
}).listen(8080);