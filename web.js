var express = require('express');
var app = express();
var logger = require('morgan');
var port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
var compression = require('compression');
var path = require('path');


app.use(logger());
app.use(bodyParser({limit: '50mb'}));
app.use(compression());
app.use(express.static(path.join(__dirname, 'www'),{ maxAge: 2592000000 }));

app.listen(port);

console.log('listening on port ' + port);