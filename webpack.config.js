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
		],
	},
	output: {
		filename: '[name].js',
		path: path.resolve("./dist"),
	}
}