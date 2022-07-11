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
            title: 'Debates',
            template: 'src/index.hbs'
        }),
        new webpack.DefinePlugin({
            'process.env.environment': JSON.stringify(process.env.NODE_ENV),
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'react-dom$': 'react-dom/profiling',
        }
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['babel-loader'],
            include: path.join(__dirname, 'src')
        },{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },{
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        }]
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
    }
}
