'use strict';

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');

var config = {
    context: __dirname,
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components']
    },

    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'src/main.js')
    ],

    output: {
        path: path.join(__dirname, '/public/'),
        filename: '[name].js',
        publicPath: '/'
    },

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
                test: /\.css$/,
                loader:'style-loader!css-loader'
            },{
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },{
                test: /\.(ico|png|eot|svg|ttf|woff|woff2)$/,
                loader: 'file',
                include: path.join(__dirname, '/src/img/')
            },{
                test: /\.json$/,
                loader: 'file',
                include: path.join(__dirname, '/src/json/')
            }
        ]
    },

    stylus: {
        use: [require('nib')()],
        import: ['~nib/lib/nib/index.styl']
    },

    plugins: [
        new FaviconsWebpackPlugin({
            logo: './src/img/favicon.png',
            background: '#C76035',
            title: 'Horchata.club',
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        ),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
};

module.exports = config;
