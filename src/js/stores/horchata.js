"use strict";

var $ = window.$;
var Backbone = window.Backbone;
Backbone.$ = $;

var Horchata = require('../models/horchata.js');
var Horchatas = require('../collections/horchatas.js');
var HorchataDispatcher = require("../dispatchers/horchata.js");

var HorchataStore = new TodoCollection()
module.exports = HorchataStore 
