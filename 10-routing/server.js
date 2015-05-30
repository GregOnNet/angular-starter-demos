'use strict';

var express = require('express');
var path    = require('path');
var app     = express();

app.use(express.static(__dirname));

app.use('/bower_components', express.static(path.join(__dirname, '..', 'bower_components')));
app.use('/styles'          , express.static(path.join(__dirname, '..', 'styles')));

app.listen(8080);

console.info('Listening on port http://localhost:8080...');
