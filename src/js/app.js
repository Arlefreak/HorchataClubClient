'use strict';
var $           = window.$;
var Router      = require('./routes/route.js');
var particlesJS = window.particlesJS;
var r;

$(function() {
    r = new Router();
    Backbone.history.start();
    particlesJS.load('particles-js', '../json/particles.json', function() {});
});
