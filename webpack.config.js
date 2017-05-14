module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/bundle',
        filename: "index_bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node-modules/, loader: "babel-loader"}
        ]
    }
}