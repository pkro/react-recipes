const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

require('dotenv').config(); // searches for .env file and loads any variable defined there

module.exports = {
    context: path.join(__dirname, 'src'), // source directory so we don't have to add it everywhere below by hand ("root", so still use ./)
    entry: ['whatwg-fetch', './index.js'], // start point(s) from where dependencies are searched
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
            },
            {
                test: /\.css$/, // loader for css
                loader: ['style-loader', 'css-loader', 'postcss-loader'] // loaders are applied last to first from the array
                // postcss-loader will transpile, css-loader makes it possible to import styles using @import, and style loader will let webpack pack into index html
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body' // where the script tag gets injected in the html
        }),
        new webpack.DefinePlugin({
            API_URL: JSON.stringify(process.env.API_URL),   // replace API_URL (or any name defined here) with value defined in .env file
                                                            // we could also just use "process.env.API_URL" in the scripts, this is just more comfortable
        }),
    ],
    
    mode: 'development'
  };