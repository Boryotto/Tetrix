module.exports = function(bs) {
	var npmRun = require("npm-run");
	bs.watch("./src/**/*.ts", function(event, file) {
		console.log(`Detected ${event} in .ts file ${file}`);
		if (event === "change") {
			npmRun.exec("npm run build", function(err, stdout, stderr) {
                console.log("Done compiling. Reloading...")
                bs.reload()
            });
		}
	});

	return {
		port: 3000,
		files: ["./src/**/*.{html,htm,css,js,ts}"]
	};
};
