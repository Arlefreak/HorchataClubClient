/* eslint no-console: 0 */

const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '.env')});
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 8000;
const app = express();

if (isDeveloping) {
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.get('*', function response(req, res) {
        console.log(path.join(__dirname, 'src/index.html'));
        res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'src/index.html')));
        res.end();
    });
} else {
    app.use(express.static(__dirname + '/public'));
    app.get('*', function response(req, res) {
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });
}

app.listen(port, '0.0.0.0', function onStart(err) {
    var info = `==> Listening on port ${port}. Open up http://0.0.0.0:${port}/ DEV: ${isDeveloping}`
    if (err) {
        console.log(err);
    }
    console.info(info);
});
