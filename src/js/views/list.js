"use strict";

var $ = window.$;
var Backbone = window.Backbone;
Backbone.$ = $;

var Horchata = require('../collections/horchatas');
var Single = require('./single');

module.exports = Backbone.View.extend({
    el: '#horchataApp',
    template: _.template($('#horchatalist-template').html()),

    initialize: function() {
        this.collection = Horchata;

        this.listenTo(Horchata, 'all', this.render);
        Horchata.fetch({reset:true});
    },

    render: function() {
        this.$el.html(this.template());
        this.$main = this.$('#horchataList');
        this.addAll();
        return this;
    },

    addOne: function(horchata) {
        var view = new Single({
            model: horchata
        });
        this.$main.append(view.render().el);
    },

    addAll: function() {
        this.$main.html('');
        Horchata.each(this.addOne, this);
    },
});
