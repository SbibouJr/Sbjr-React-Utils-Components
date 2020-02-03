const path = require('path');

module.exports = {
  mode: 'development', //'production',
  plugins: [],
  resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
  module: {
    rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
					{
						loader: 'ts-loader',
					},
				],
			},
			{
				test: /\.(js)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
  },
};
