let http = require('http');
let myFecha = require('./fecha');
var url = require('url')
var fs = require('fs')
var formidable = require('formidable')
const absolute = path.join(__dirname, 'img')

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.filepath;
        var newpath = absolute + '/' + files.filetoupload.originalFilename;
        console.log(newpath)
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write('File uploaded and moved!');
          res.end();
        });
   });
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
  }).listen(8080);

/*
http.createServer(function (ini, fin){
    console.log(ini.url)
    var q = url.parse(ini.url, true).query;
    let usuario = {}

    fs.readFile('./usuario.json', 'utf8', function (err, data) {
        console.log(data)
        usuario = JSON.parse(data);
        console.log(usuario)
        fin.end('<h1>Hola ' + q.nombre + ' ' + q.apellido + ' desde nodeJs! ' + myFecha.fecha() + ' ' + usuario.sus + '<h1>')

        usuario.sus = "THE"

        fs.writeFile('./usuario.json', JSON.stringify(usuario),function (err) {
            if (err) throw err;
            console.log('Replaced!')
        })
    })

    //res.writeHead(200,{'Content-Type': 'text/plain'})
}).listen(8080)
*/

