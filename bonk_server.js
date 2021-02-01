const fs = require('fs');
const http = require('http');

http.createServer(function(req, res) {
  var bonkDir = fs.readdirSync("./img/");
  var bonkPath = bonkDir[Math.floor(Math.random() * bonkDir.length)];
  var bonkImg = fs.readFileSync("./img/" + bonkPath);
  res.writeHead(200, {"Content-Type": "image/jpeg"});
  res.end(bonkImg, "binary");
}).listen(1995);
