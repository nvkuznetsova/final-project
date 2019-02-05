const path = require('path');
const webpack = require('webpack');
require('@babel/polyfill');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: ['@babel/polyfill', './index.js'],

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build'),
    },

    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        contentBase: __dirname,
        hot: true,
        open: true,
        port: 5555,
    },
};