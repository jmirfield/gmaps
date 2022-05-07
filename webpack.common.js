const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config({ path: './.env' });

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js'],
        fallback: {
            "fs": false,
            "os": false,
            "path": false
        },

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/template.html',
            inject: 'body',
            environment: process.env.GMAP_API
        }),
    ],
};