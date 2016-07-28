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

import React from 'react';
import routes from './routes';

import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import horchataApp from '../src/js/reducers/reducers';
import App from '../src/js/components/about.jsx';

app.use((req, res) => {
    // Create a new Redux store instance
    const store = createStore(horchataApp);

    // Render the component to a string
    const html = renderToString(
        <Provider store={store}>
        <App />
        </Provider>
    );

    // Grab the initial state from our Redux store
    const initialState = store.getState();

    // Send the rendered page back to the client
    res.send(renderFullPage(html, initialState));
});

function renderFullPage(html, initialState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `;
}


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
