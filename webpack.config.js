const path = require('path');
const webpack = require('webpack');
const moment = require('moment');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: "development", // production
	entry: {
		main: "./index.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				// css-loader: css import
				// style-loader: import 된 css의 적용
				test: /\.css$/,
				// use: ["style-loader", "css-loader"],
				use: [{
					loader: MiniCssExtractPlugin.loader,
					options: {
						esModule: true,
					}
				}, "css-loader"],
			},
			/* {
				test: /\.(jpe?g|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							publicPath: './dist/',
							name: '[name].[ext]?[hash]'
						}
					}
				],
			}, */
			{
				test: /\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							publicPath: './',
							name: '[name].[ext]?[hash]',
							limit: 2028 // 2kb 이하만 처리
						}
					}
				],
			}
		],
	},
	plugins: [
		new webpack.BannerPlugin({
			banner: `
				Created by booldook
				Build Datetime: ${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}
			`,
		}),
		new webpack.DefinePlugin({
			VERSION: JSON.stringify('v.1.0.0'),
			'api.domain': JSON.stringify('http://example.com')
		}),
		new HtmlWebpackPlugin({
			template: 'index.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
			},
			hash: true
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: "[name].css"
		}),
	],
	output: {
		filename: '[name].js',
		path: path.resolve("./dist"),
	},
	devServer: {
		contentBase: path.resolve("./dist"),
		port: 8000,
	}
}


