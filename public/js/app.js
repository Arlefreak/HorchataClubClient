(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var $           = window.$;
var Router      = require('./routes/route.js');
var particlesJS = window.particlesJS;
var r;

$(function() {
    r = new Router();
    Backbone.history.start();
    particlesJS.load('particles-js', '../json/particles.json', function() {});
});

},{"./routes/route.js":5}],2:[function(require,module,exports){
"use strict";

var $        = window.$;
var Backbone = window.Backbone;
Backbone.$   = $;
var Common   = require('../common');
var Horchata  = require('../models/horchata');

var Products = Backbone.Collection.extend({
    model: Horchata,
    url: Common.URL + 'horchata?publish=True',
    
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
        small_text: '',
        image: '',
        date: '',
        updated: ''
    },

    url: function() {
        return this.urlRoot + '/' + this.id;
    },
});

},{"../common.js":3}],5:[function(require,module,exports){
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

},{"../views/about":6,"../views/list":7}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{"../collections/horchatas":2,"./single":8}],8:[function(require,module,exports){
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

},{"../common.js":3}]},{},[1])


//# sourceMappingURL=app.js.map
