const path = require('path');
module.exports = {
	mode: "development",
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
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	output: {
		filename: '[name].js',
		path: path.resolve("./dist"),
	}
}