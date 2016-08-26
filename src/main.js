import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/app.js';
import particles from 'particles.js';

var jsonParticles = require('./json/particles.json');

particles.particlesJS.load('particles-js', jsonParticles, function() {
    console.log('callback - particles.js config loaded');
});

var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('application'));
