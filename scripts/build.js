const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = () => {
	return {
		entry: [path.resolve(__dirname, "../src/index.tsx")],
		output: {
			publicPath: "/",
			path: path.resolve(__dirname, "../dist"),
		},
		plugins: [
			new CleanWebpackPlugin(),
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
					use: ["style-loader", "css-loader", "postcss-loader"],
				},
				{
					test: /\.less$/,
					use: ["style-loader", "css-loader", "less-loader", "postcss-loader"],
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
					test: /favicon\.png$/,
					use: [
						{
							loader: "file-loader",
							options: {
								name: "[name].[ext]?[hash]",
							},
						},
					],
				},
				{
					test: /\.(jpe?g|png|gif)(\?.+)?$/,
					loader: "url-loader",
				},
				{
					test: /\.(png|jpg|jpeg|gif|svg|svgz)$/,
					include: [path.resolve(__dirname, "../src/pages/blog")],
					use: [
						{
							loader: "url-loader",
							options: {
								name: "images/[name].[ext]",
								publicPath: "/",
								limit: 4096,
							},
						},
					],
				},
				{
					test: /\.md$/,
					loader: "raw-loader",
				},
			],
		},
		mode: "production",
		resolve: {
			extensions: [".js", ".ts", ".tsx", ".json"],
			alias: {
				"@": path.resolve("src"),
			},
		},
		watch: true,
	};
};
