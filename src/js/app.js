'use strict';
var $ = window.$;
var Router = require('./routes/route.js');
var ReactDOM = window.ReactDOM;
var aboutComponent = require('./components/about.js');
var listComponent = require('./components/list.js');
var particlesJS = window.particlesJS;
var r;

$(function() {
    // r = new Router();
    // Backbone.history.start();
    ReactDOM.render(
        React.createElement(listComponent, null),
        document.getElementById('horchataApp')
    );
    ReactDOM.render(
        React.createElement(aboutComponent, null),
        document.getElementById('horchataApp')
    );
    particlesJS.load('particles-js', '../json/particles.json', function() {});
});
