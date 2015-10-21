"use strict";

var $ = window.$;
var Backbone = window.Backbone;
Backbone.$ = $;

var Common = require('../common');
var Horchata = require('../collections/horchatas');
var Single = require('./single');

module.exports = Backbone.View.extend({
    el: '#horchataApp',

    initialize: function() {
        this.$main = this.$('#horchataApp');

        this.listenTo(Horchata, 'add', this.addOne);
        this.listenTo(Horchata, 'reset', this.addAll);

        // New
        this.listenTo(Horchata, 'all', this.render);
        Horchata.fetch({reset:true});
    },

    render: function() {

        if (Horchata.length) {
            this.$main.show();
        } else {
            this.$main.hide();
        }
    },

    addOne: function(horchata) {
        var view = new Single({
            model: horchata
        });
        $('#horchataList').append(view.render().el);
    },

    addAll: function() {
        this.$('#horchataList').html('');
        Horchata.each(this.addOne, this);
    },
});
