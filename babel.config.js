module.exports = {
	presets: [
		['@babel/preset-env', {
			useBuiltIns: 'usage',
			corejs: {
				version: 2
			},
			targets: { 
				browsers: ">= 1% in KR"
			}
		}],
	]
}