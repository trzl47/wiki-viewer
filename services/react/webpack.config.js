const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

const browserConfig = {
	entry: './src/index.js',
	devtool: devMode ? 'cheap-module-source-map' : 'source-map',
	target: 'web',
	mode: devMode ? 'development' : 'production',
	output: {
		path: devMode ? path.resolve(__dirname, 'build/client-dev') : path.resolve(__dirname, 'build/client'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.(ttf|woff|woff2|eot|svg|ico|png|jpg|mp4)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
						}
					}
				]
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
				],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true },
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	watchOptions: {
		ignored: /node_modules/,
		aggregateTimeout: 300,
		poll: 1000,
	},
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'true',
			'process.env':{
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
				'VHOST': JSON.stringify(process.env.VHOST),
				'PORT': JSON.stringify(process.env.PORT)
			}
		}),
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
			favicon: './src/favicon/favicon.ico',
		}),

		new MiniCssExtractPlugin({
			filename: devMode ? '[name].css' : '[name].[hash].css',
		}),
	],
};

module.exports = [
	browserConfig,
];