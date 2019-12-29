const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.join(__dirname, 'src'), // source directory so we don't have to add it everywhere below by hand ("root", so still use ./)
    entry: './index.js', // start point from where dependencies are searched
    output: {
        path: path.resolve(__dirname, 'dist'), // output transpiled to dist folder 
        filename: 'bundle.js',
    },
    module: { // optional modules defined in rules (there can be many objects under rules)
        rules: [
            {
                test: /\.js$/, // test for this regex
                loader: 'babel-loader' // ... use this module to preprocess
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/, // loader for image files
                loader: 'file-loader' // now, instead of file content, the loader will return the path of the image
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body' // where the script tag gets injected in the html
        }),
    ],
    
    mode: 'development'
  };