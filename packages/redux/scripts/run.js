const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const devServer = new WebpackDevServer(
	webpack({
		devtool: "inline-source-map",
		entry: path.resolve(__dirname, "../demo/index.js"),
		output: {
			publicPath: "/",
			path: path.resolve(__dirname, "./dist"),
			filename: "redux.[name].js",
		},
		plugins: [
			new webpack.ProvidePlugin({
				process: "process/browser",
			}),
			new webpack.HotModuleReplacementPlugin(),
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, "../demo/index.html"),
				filename: "index.html",
				compile: true,
				inject: true,
			}),
		],
		module: {
			rules: [
				{
					test: /\.ejs$/,
					loader: "ejs-loader",
				},
				{
					test: /\.js?$/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env", "@babel/preset-react"],
						},
					},
				},
			],
		},
		mode: "development",
		resolve: {
			extensions: [".js", ".jsx", ".json"],
			fallback: {
				os: require.resolve("os-browserify/browser"),
				util: require.resolve("util/"),
				assert: false,
				stream: require.resolve("stream-browserify"),
				constants: false,
				path: require.resolve("path-browserify"),
				crypto: require.resolve("crypto-browserify"),
				buffer: require.resolve("buffer/"),
				https: require.resolve("https-browserify"),
				vm: require.resolve("vm-browserify"),
				http: require.resolve("stream-http"),
				fs: false,
				child_process: false,
				worker_threads: false,
			},
		},
	}),
	{
		publicPath: "/",
		hot: true,
		historyApiFallback: true,
		stats: { colors: true },
		disableHostCheck: true,
		host: "127.0.0.1",
		index: 'index.html',
		inline: true,
		open: true,
	}
);
devServer.listen(8081, "0.0.0.0", (error) => {
	if (error) {
		throw error;
	}
});
