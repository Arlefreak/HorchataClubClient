"use strict";

var $ = window.$;
var Backbone = window.Backbone;
Backbone.$ = $;

module.exports = Backbone.View.extend({
    el: '#horchataApp',
    template: _.template($('#aboutus-template').html()),

    initialize: function() {
        this.render();
        this.$main = this.$('#horchataApp');
    },

    // Re-render the titles of the todo item.
    render: function() {
        this.$el.html(this.template());
        return this;
    },
});
