'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: __dirname + '/entry',

    entry: './index.js',

    output: {
        path: path.join(__dirname, 'output'),
        filename: 'bundle.js',
        library: 'entry',
        publicPath: "/output"
    },

    devServer: {
        compress: true,
        port: 9000,
        stats: 'errors-only',
        open: true,
        hot: true,
        inline: true,
        publicPath: '/output'
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'dev'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }]
            }
        ]
    },
    resolve: {
        modules: [
            './node_modules/'
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

