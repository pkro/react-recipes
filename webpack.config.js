const webpack = require('webpack');

module.exports = {
    entry: './src/index.js', // start point from where dependencies are searched
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    module: { // optional modules defined in rules (there can be many objects under rules)
        rules: [
            {
                test: /\.js$/, // test for this regex
                loader: 'babel-loader' // ... use this module to preprocess
            }
        ]
    },
    mode: 'development'
  };