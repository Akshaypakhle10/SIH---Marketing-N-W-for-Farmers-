const {resolve} = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        './index.html',
        './Index.jsx'
    ],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'build'),
        publicPath: ''
    },
    context: resolve(__dirname, 'src'),
    devtool: 'source-map',
    devServer: {
        hot: true,
        historyApiFallback: {
            index: 'index.html',
        },
        contentBase: resolve(__dirname, 'build'),
        publicPath: '',
        proxy: {
            '/': {
                target: '',
                secure: false
            }
        },
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.jsx$/,
                enforce: "pre",
                loader: 'babel-loader',
                include: [
                    resolve(__dirname, 'src')
                ],
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react'],
                }
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/]
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            }, {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]'
            }, {test: /\.(jpg|png)(\?[a-z0-9#=&.])?$/, loaders: ['file-loader?name=images/[name].[ext]']},
            {
                test: /\.(ttf|eot|svg|pdf|woff2|woff)(\?[a-z0-9#=&.])?$/,
                loaders: ['file-loader?name=resources/[name].[ext]']
            }
        ],
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css", "pdf"],
    },


    plugins: [

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                sessionTimeoutMinutes: 15,
                minuteBeforePrompt: 1
            }
        }),
        new webpack.ProvidePlugin({
            Promise: 'es6-promise-promise'
        })
    ]
};