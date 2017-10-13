const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: "./src/main.ts",
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/bin",
		filename: "bundle.js"
	},
	devtool: "source-map",
	resolve: {
		// Add '.ts' and '.tsx' as a resolvable extension.
		extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},
	module: {
		loaders: [
			// all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
			{ test: /\.tsx?$/, loader: "ts-loader" },
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
		]
	}
};
