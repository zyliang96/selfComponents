const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const webpackRunner = webpack({
  mode: "production",
  // devtool: "inline-source-map",
  entry: "../src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "router.[contenthash].js",
    library: "zyliangRouter",
    libraryTarget: "umd",
  },
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
  plugins: [
    new CleanWebpackPlugin(),
    new CompressionWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
    },
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
