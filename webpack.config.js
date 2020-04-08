const path = require('path');
const webpack = require('webpack');
const moment = require('moment');

module.exports = {
	mode: "development", // production
	entry: {
		main: "./index.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					path.resolve("./sample-loader.js"),
				]
			},
			{
				// css-loader: css import
				// style-loader: import 된 css의 적용
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
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
							publicPath: './dist/',
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
	],
	output: {
		filename: '[name].js',
		path: path.resolve("./dist"),
	}
}