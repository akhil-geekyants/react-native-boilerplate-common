const execSync = require("child_process").execSync;
const spawn = require("child_process").spawn;
var repos = require("./all/repos");

let index;
for (index = 0; index < repos.length; ++index) {
	execSync("wml add ./common ../" + repos[index].slug, (err, stdout, stderr) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(stdout);
	});

	if (repos[index].type === "Flow") {
		execSync("wml add ./Flow ../" + repos[index].slug, (err, stdout, stderr) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log(stdout);
		});
	} else {
		execSync("wml add ./TypeScript ../" + repos[index].slug, (err, stdout, stderr) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log(stdout);
		});
	}
}

spawn("wml", ["start"], {
	stdio: "inherit",
});
