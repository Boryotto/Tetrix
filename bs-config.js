// Taken from the example: https://github.com/Browsersync/recipes/tree/master/recipes/webpack.typescript

module.exports = function(browserSync) {
	var webpackDevMiddleware = require("webpack-dev-middleware");
	var webpack = require("webpack");
	var stripAnsi = require("strip-ansi");

	var webpackConfig = require("./webpack.config");
	var bundler = webpack(webpackConfig);

	bundler.plugin("done", function(stats) {
		if (stats.hasErrors() || stats.hasWarnings()) {
			return browserSync.sockets.emit("fullscreen:message", {
				title: "Webpack Error:",
				body: stripAnsi(stats.toString()),
				timeout: 100000
			});
		}
		browserSync.reload();
	});

	return {
		port: 3000,
		server: "dist",
		logFileChanges: false,
		middleware: [
			webpackDevMiddleware(bundler, {
				publicPath: webpackConfig.output.publicPath,
				stats: { colors: true }
			})
		],
		plugins: ["bs-fullscreen-message"],
		files: ["dist/*.html", "dist/css/*.css"]
	};
};
