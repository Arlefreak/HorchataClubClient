'use strict';
var $ = window.$;
var Backbone = window.Backbone;
var ListView = require('../views/list');
var AboutView = require('../views/about');


module.exports = Backbone.Router.extend({
    routes: {
        "": "index",
        "about": "about"
    },

    index: function() {
        var view = new ListView();

        // Attach the tutorial page to the DOM
        view.render(function(el) {
            $("#horchataApp").html(el);
        });
    },

    about: function() {
        var view = new AboutView();

        view.render(function(el) {
            $("#horchataAp").html(el);
        });
    }
});
