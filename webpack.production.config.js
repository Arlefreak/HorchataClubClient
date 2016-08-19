var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'src', 'js/app.js');

const bowerPlugin = new Webpack.ResolverPlugin(
    new Webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
)

var config = {
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components']
    },

    // We change to normal source mapping
    devtool: 'source-map',
    entry: mainPath,
    output: {
        path: buildPath,
        filename: 'bundle.js'
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

    plugins: [
        bowerPlugin
    ]
};

module.exports = config;
