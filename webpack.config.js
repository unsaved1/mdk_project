'use strict';


const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        // path: path.resolve(__dirname, 'C:/Program Files/OSPanel/domains/Source/js'),
        filename: 'bundle.js',
    },
    watch: true,

    devtool: 'source-map',

    module: {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [['@babel/preset-env', {
                      debug: true,
                      corejs: 3,
                      useBuiltIns: "usage"
                  }]]
                }
              }
            }
          ]
    }
};