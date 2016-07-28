'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _appRootPath = require('app-root-path');

var _appRootPath2 = _interopRequireDefault(_appRootPath);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _errorhandler = require('errorhandler');

var _errorhandler2 = _interopRequireDefault(_errorhandler);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config({ path: _appRootPath2.default + '/.env' });
var app = (0, _express2.default)();

var port = parseInt(process.env.PORT, 10) || 8000;

app.use(_express2.default.static(__dirname + '/public'));
app.get('/*', function (request, response) {
    response.sendFile(_path2.default.resolve(__dirname, 'public', 'index.html'));
});

app.use((0, _methodOverride2.default)());

app.use(_bodyParser2.default.urlencoded({
    extended: true
}));

app.use((0, _errorhandler2.default)({
    dumpExceptions: true,
    showStack: true
}));

app.listen(port);
console.log('server started on port ' + port);