var path = require('path');
var webpack = require("webpack");
var DashboardPlugin = require('webpack-dashboard/plugin');

const bowerPlugin = new webpack.ResolverPlugin(
    new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
)

module.exports = {
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components']
    },

    context: __dirname + '/src',

    entry: [
        // 'webpack-dev-server/client?http://localhost:8080',
        // 'webpack/hot/dev-server',
        "./js/app.js",
        "./index.html",
    ],

    output: {
        filename: "app.js",
        path: __dirname + "/public",
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel?presets[]=es2015']
            },{
                test: /\.html$/,
                loader: 'file?name=[name].[ext]',
            },{
                test: /\.styl$/,
                loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
            },{
                test: /particles\.js/,
                loader: 'exports?particlesJS=window.particlesJS,pJSDom=window.pJSDom'
            }
        ]
    },

    stylus: {
        use: [require('nib')()],
        import: ['~nib/lib/nib/index.styl']
    },

    // devServer: {
    //     hot: true,
    //     inline: true,
    //     contentBase: './public/'
    // },

    plugins: [
        bowerPlugin,
        // new DashboardPlugin({}),
        // new webpack.HotModuleReplacementPlugin()
    ],
};
