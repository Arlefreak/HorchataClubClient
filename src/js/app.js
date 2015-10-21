'use strict';
var $         = window.$;
var ListView  = require('./views/list');

$(function() {
    particlesJS.load('particles-js', '../json/particles.json', function() {});
    new ListView();
});
