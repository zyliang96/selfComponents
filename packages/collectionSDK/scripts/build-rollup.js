const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const rollup = require("rollup");

// see below for details on the options
const inputOptions = {
    input: "../src/match.js",
    onwarn({ loc, frame, message, code }) {
        // 跳过某些警告
        if (code === "UNUSED_EXTERNAL_IMPORT") return;

        // 抛出异常
        if (code === "NON_EXISTENT_EXPORT") throw new Error(message);

        // 控制台打印一切警告
        if (loc) {
            console.warn(`${loc.file} (${loc.line}:${loc.column}) ${message}`);
            if (frame) console.warn(frame);
        } else {
            console.warn(message);
        }
    },
    plugins: [resolve(), commonjs()],
};
const outputOptions = {
    file: "../dist/router-match.js",
    format: "commonjs",
    name: "router-match",
    sourcemap: true,
    sourcemapFile: "router-match.js.map",
};

async function build() {
    // create a bundle
    const bundle = await rollup.rollup(inputOptions);

    // console.log(bundle.imports); // an array of external dependencies
    // console.log(bundle.exports); // an array of names exported by the entry point
    // console.log(bundle.modules); // an array of module objects

    // generate code and a sourcemap
    const { code, map } = await bundle.generate(outputOptions);

    // or write the bundle to disk
    await bundle.write(outputOptions);
}

build();
