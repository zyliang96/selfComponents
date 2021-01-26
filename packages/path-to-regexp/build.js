const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpackRunner = webpack({
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "path-to-regexp.min.js",
    library: "my-path-to-regexp",
    libraryTarget: "umd",
  },
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
              ],
            ],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
        exclude: "/node_modules/",
      },
    ],
  },
});

webpackRunner.run((err, state) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(
    state.toString({
      chunks: false, // 使构建过程更静默无输出
      colors: true, // 在控制台展示颜色
    })
  );
  if (state.hasErrors()) {
    console.error(err);
  }
  if (state.hasWarnings()) {
    console.warn(err);
  }
});
