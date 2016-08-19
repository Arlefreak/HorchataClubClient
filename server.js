'use strict';
var express = require('express');
var httpProxy = require('http-proxy');
var path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '.env')});
var app = express();
var proxy = httpProxy.createProxyServer();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var port = parseInt(process.env.PORT, 10) || 8000;
var isProduction = process.env.NODE_ENV === 'production';

app.use(express.static(__dirname + '/public'));

// We only want to run the workflow when not in production
if (!isProduction) {
    // We require the bundler inside the if block because
    // it is only needed in a development environment. Later
    // you will see why this is a good idea
    var bundle = require('./server/bundle.js');
    bundle();

    // Any requests to localhost:3000/build is proxied
    // to webpack-dev-server
    app.all('/build/*', function (req, res) {
        proxy.web(req, res, {
            target: 'http://localhost:8080'
        });
    });
}

app.get('/*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.use(methodOverride());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(errorHandler({
    dumpExceptions: true,
    showStack: true
}));

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port);
console.log('server started on port ' + port);
