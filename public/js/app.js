(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var $         = window.$;
var ListView  = require('./views/list');

$(function() {
    particlesJS.load('particles-js', '../json/particles.json', function() {});
    new ListView();
});

},{"./views/list":5}],2:[function(require,module,exports){
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

},{"../common":3,"../models/horchata":4}],3:[function(require,module,exports){
"use strict";

var Common = {
    ENTER_KEY: 13,
    FILTER: "",
    URL: 'http://api.horchata.club/'
};

module.exports = Common;

},{}],4:[function(require,module,exports){
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
        image: '',
        date: '',
        updated: ''
    },

    url: function() {
        return this.urlRoot + '/' + this.id;
    },
});

},{"../common.js":3}],5:[function(require,module,exports){
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

},{"../collections/horchatas":2,"../common":3,"./single":6}],6:[function(require,module,exports){
"use strict";

var $        = window.$;
var Backbone = window.Backbone;
var _        = window._;
Backbone.$   = $;

var Common   = require('../common.js');

module.exports = Backbone.View.extend({

    //... is a list tag.
    tagName: 'li',

    // Cache the template function for a single item.
    template: _.template($('#horchata-template').html()),

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove); // NEW
    },

    // Re-render the titles of the todo item.
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        this.$input = this.$('.edit');
        return this;
    },

    toggleVisible: function() {
        this.$el.toggleClass('hidden', this.isHidden());
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

},{"../common.js":3}]},{},[1])


//# sourceMappingURL=app.js.map
