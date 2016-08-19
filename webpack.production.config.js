'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components']
    },

    entry: [
        path.join(__dirname, 'src/main.js')
    ],

    output: {
        path: path.join(__dirname, '/public/'),
        filename: '[name]-[hash].min.js',
        publicPath: '/'
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        ),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('[name]-[hash].min.css'),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        new StatsPlugin('webpack.stats.json', {
            source: false,
            modules: false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel?presets[]=es2015']
            },{
                test: /particles\.js/,
                loader: 'exports?particlesJS=window.particlesJS,pJSDom=window.pJSDom'
            },{
                test: /\.(css|styl)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'stylus-loader'])
            },{
                test: /\.svg$/,
                loader: 'file',
                include: path.join(__dirname, '/src/img/'),
            }
        ]
    },

    stylus: {
        use: [require('nib')()],
        import: ['~nib/lib/nib/index.styl']
    },
};
