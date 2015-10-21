"use strict";

var $        = window.$;
var Backbone = window.Backbone;
Backbone.$   = $;
var Common   = require('../common');
var Horchata  = require('../models/horchata');

var Products = Backbone.Collection.extend({
    model: Horchata,
    url: Common.URL + 'horchata',
    
    comparator: function(product) {
        return product.get('order');
    }
});

module.exports = new Products();
