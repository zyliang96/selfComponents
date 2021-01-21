const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpackRunner = webpack({
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "history.[name].[chunkhash:16].js",
    library: "zyliangHistory",
    libraryTarget: "umd",
  },
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": path.resolve("src"),
    },
  },
});

webpackRunner.run((err, state) => {
  if (err) {
    console.log(err);
  }
});
