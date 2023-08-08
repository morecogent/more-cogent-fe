var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
    devtool: process.env.NODE_ENV === 'development' ? 'eval-source-map' : undefined,
    mode: 'development',
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'More Cogent',
            template: 'src/index.hbs'
        }),
        new webpack.DefinePlugin({
            'process.env.environment': JSON.stringify(process.env.NODE_ENV),
        })
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            'react-dom$': 'react-dom/profiling',
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }, {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/react'],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", {"legacy": true}],
                            ["@babel/plugin-proposal-class-properties", {"loose": true}]
                        ]
                    }
                }],
                include: path.join(__dirname, 'src'),
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }]
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
    }
}
