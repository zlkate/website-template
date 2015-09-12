var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var serverRoot = process.cwd();

app.use(express.static(serverRoot + '/public/'));

app.use(function(req, res, next){
  res
  	.status(404)
  	.sendFile(serverRoot + '/public/404.html');
});

app.listen(port);
console.log('server started on port:' + port);

require('heroku-ping-alive');
