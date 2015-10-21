"use strict";

var $ = window.$;
var Backbone = window.Backbone;
var Common = require('../common.js');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
    urlRoot: Common.URL + 'horchata',
    defaults: {
        id: -1,
        tags: [],
        order: 0,
        publish: false,
        credit_card: false,
        name: '',
        slug: '',
        price: 0,
        grade: 0,
        address: '',
        map_url: '',
        description: '',
        small_text: '',
        image: '',
        date: '',
        updated: ''
    },

    url: function() {
        return this.urlRoot + '/' + this.id;
    },
});
