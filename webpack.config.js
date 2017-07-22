const webpack = require('webpack');
const jquery = 'jquery/src/jquery';

module.exports = {
    entry: {
        app: './src/app',
        index: './src/index'
    },
    output: {
        path: __dirname + '/public/js/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            'jquery': jquery
        }
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: __dirname + './node_modules/'
            }
        ]
    }
}