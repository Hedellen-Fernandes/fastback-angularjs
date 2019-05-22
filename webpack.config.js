/* eslint-disable */
var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
    	'app': path.join(__dirname, 'dev/app/app.js')
  	},
  	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '/dev/assets/js/'),
		devtoolLineToLine: true,
		pathinfo: true,
		sourceMapFilename: 'bundle.js.map',
		publicPath: path.join(__dirname, 'dev/')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.scss$/,
				use: [{loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'sass-loader'}]
			},
			{
				test: /\.html$/,
				use: ['raw-loader']
			},
			{
				test: /\.(png|jpg)$/,
				use: ['url-loader?limit=8192']
			},
			{
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				use: ['url?limit=10000&minetype=application/font-woff']
			},
			{
				test: /\.woff2$/,
				use: ['url?limit=10000&minetype=application/font-woff']
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				use: ['url?limit=10000&minetype=application/octet-stream']
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				use: ['file']
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: ['url?limit=10000&minetype=image/svg+xml']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		publicPath: '/',
		contentBase: path.join(__dirname, '/dev'),
		compress: true
	},
	devtool: 'eval'
};
