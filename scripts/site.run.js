const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const devServer = new WebpackDevServer(
	webpack({
		// devtool: 'eval',
		devtool: "inline-source-map",
		entry: [path.resolve(__dirname, "../src/index.tsx")],
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "bundle.js",
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, "../public/index.html"),
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
					test: /\.(tsx?|js)$/,
					use: {
						loader: "babel-loader",
						options: {
							presets: [
								"@babel/preset-env",
								"@babel/preset-react",
								"@babel/preset-typescript",
							],
						},
					},
				},
				{
					test: /\.css$/,
					use: ["style-loader", "css-loader"],
				},
				{
					test: /\.less$/,
					use: ["style-loader", "css-loader", "less-loader"],
				},
				{
					test: /\.scss$/,
					use: ["style-loader", "css-loader", "sass-loader"],
				},
				{
					test: /\.(eot|svg|ttf|woff|woff2)(\?.+)?$/,
					loader: "file-loader",
				},
				{
					test: /\.(jpe?g|png|gif)(\?.+)?$/,
					loader: "url-loader",
				},
				{
					test: /\.md$/,
					loader: "raw-loader",
				},
			],
		},
		mode: "development",
		resolve: {
			extensions: [".js", ".ts", ".tsx", ".json"],
			alias: {
				"@": path.resolve("src"),
			},
		},
		watch: true,
	}),
	{
		publicPath: "/",
		hot: true,
		historyApiFallback: true,
		stats: { colors: true },
		disableHostCheck: true,
		clientLogLevel:'info',
		host: "127.0.0.1",
		open: true,
		inline:true,
	}
);
devServer.listen(8001, "0.0.0.0", (error) => {
	if (error) {
		throw error;
	}
});
