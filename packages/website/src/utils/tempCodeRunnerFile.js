const fs = require("fs");
const path = require("path");
const baseDir = "../pages/component";
const targetDir = path.resolve(__dirname, baseDir);
const readDir = fs.readdirSync(targetDir);
let result = [];
readDir.forEach((dir) => {
	const dirPath = path.resolve(__dirname, `${baseDir}/${dir}`);
	const dirData = fs.readdirSync(dirPath);
	console.log(dirData);
});
