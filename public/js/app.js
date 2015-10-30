(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var $ = window.$;
var Router = require('./routes/route.js');
var ReactDOM = window.ReactDOM;
var aboutComponent = require('./components/about.js');
var listComponent = require('./components/list.js');
var particlesJS = window.particlesJS;
var r;

$(function() {
    // r = new Router();
    // Backbone.history.start();
    ReactDOM.render(
        React.createElement(listComponent, null),
        document.getElementById('horchataApp')
    );
    ReactDOM.render(
        React.createElement(aboutComponent, null),
        document.getElementById('horchataApp')
    );
    particlesJS.load('particles-js', '../json/particles.json', function() {});
});

},{"./components/about.js":4,"./components/list.js":5,"./routes/route.js":7}],2:[function(require,module,exports){
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

},{"../common":3,"../models/horchata":6}],3:[function(require,module,exports){
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
var React = window.React;

module.exports = React.createClass({
    displayName: 'aboutus',
    render: function() {
        return (
            React.createElement('div', {
                    id: "aboutus"
            },
            React.createElement('p',null,
"Somos amantes de la centenaria bebida refrescante conocida como Agua de Horchata, tradicional bebida mexicana que suele acompañar nuestros tacos o arracheras. A pesar de su fácil y conocida preparación, en Horchata.Club nos dimos la tarea de probar las mejores horchatas de la Ciudad de México, documentarlas y clasificarlas."),
            React.createElement('p',{className: "question"},"¿Qué es el agua de horchata?"),
            React.createElement('p',null,
                "Forma parte de las tradicionales aguas frescas mexicanas, junto con el agua de jamaica, tamarindo, limón y otras frutas típicas. El agua de horchata se prepara mezclando harina de arroz, azúcar blanca, canela, leche en polvo, vainilla y en ocasiones almendras, coco, y semillas de morro; Aunque la receta puede variar según la región y el gusto personal."
                               ),
            React.createElement('p',{className: "question"},"¿Dónde encontramos el agua de horchata?"),
            React.createElement('p',null,
                                "Bebida enraizada en la cultura gastronómica mexicana, la encontramos en cualquier restaurante que se jacte de mexicano; comúnmente acompañada con tacos en días veraniegos, aunque no falta su presencia en el repertorio de la abuela y fiestas infantiles (y no tan infantiles).")
            )
        );
    }
});

},{}],5:[function(require,module,exports){
"use strict";

var $ = window.$;
var React = window.React;

module.exports = React.createClass({
    displayName: 'List',
    render: function() {
        return (
            React.createElement('div', {
                    id: "horchataList"
                },
                "This is a list"
            )
        );
    }
});

},{}],6:[function(require,module,exports){
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

},{"../common.js":3}],7:[function(require,module,exports){
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

},{"../views/about":8,"../views/list":9}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{"../collections/horchatas":2,"./single":10}],10:[function(require,module,exports){
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
