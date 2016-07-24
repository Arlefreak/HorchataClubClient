'use strict';
import express from 'express';
import path from 'path';
import appRoot from 'app-root-path';
require('dotenv').config({path: appRoot +  '/.env'});
var app = express();
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';
import methodOverride from 'method-override';
var port = parseInt(process.env.PORT, 10) || 8000;

app.use(express.static(__dirname + '/public'));
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

app.listen(port);
console.log('server started on port ' + port);
