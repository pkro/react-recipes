const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    mode: 'development'
  };