const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname, 'src', 'index.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					// first right then left
					use: ['css-loader']
					//loaders: ['css-loader', 'sass-loader', 'postcss-loader']
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'main.css',
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
			filename: 'index.html',
		})
	]
}