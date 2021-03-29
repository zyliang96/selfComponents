const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
module.exports = {
    entry: [path.resolve(__dirname, "../src/index.tsx")],
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].[chunkhash:8].js",
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].[contenthash:8].css",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
            filename: "index.html",
            compile: true,
            inject: true,
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: "async",
            minSize: 20000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.ejs$/,
                loader: "ejs-loader",
            },
            {
                test: /\.(tsx?|js)$/,
                exclude: [
                    /node_modules/,
                    path.resolve(__dirname, "../src/utils"),
                ],
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
                use: [
                    MiniCssExtractPlugin.loader,
                    // "style-loader",
                    "css-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // "style-loader",
                    "css-loader",
                    "less-loader",
                    "postcss-loader",
                ],
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
};
