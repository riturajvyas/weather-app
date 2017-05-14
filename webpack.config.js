var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "index.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node-modules/, loader: "babel-loader"}
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}