var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(process.cwd() + '/public/'));

app.listen(port);
console.log('server started on port:' + port);

require('heroku-ping-alive');
