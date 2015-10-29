"use strict";

var $        = window.$;
var Backbone = window.Backbone;
var _        = window._;
Backbone.$   = $;

var Common   = require('../common.js');

module.exports = Backbone.View.extend({

    tagName: 'li',
    template: _.template($('#horchata-template').html()),

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
        this.render();
    },

    // Re-render the titles of the todo item.
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },

    isHidden: function() {
        var stock = this.model.get('publish');
        return ( // hidden cases only
            (!stock && Common.FILTER === 'publish') || (stock && Common.FILTER === 'publish')
        );
    },

    clear: function() {
        this.model.destroy();
    }
});
