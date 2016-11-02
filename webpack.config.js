var path = require('path');

module.exports = {
    entry: './client/app.js',
    output: {
        path: './public/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }}
        ]
    }
}
