import http from 'http';
import assert from 'assert';
var appRoot = require('app-root-path');
require('dotenv').config({path: appRoot +  '/.env'});
var port = parseInt(process.env.PORT, 10) || 8000;

import '../lib/index.js';

describe('Example Node Server', () => {
    it('should return 200', done => {
        http.get('http://127.0.0.1:' + port, res => {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});
