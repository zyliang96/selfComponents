const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "eval",
  entry: path.resolve(__dirname, "../demo/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "router.[name].js",
  },
  plugins: [
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
  mode: "production",
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
    },
  },
  devServer: {
    publicPath: "/",
    hot: true,
    historyApiFallback: false,
    stats: { colors: true },
    disableHostCheck: true,
    host: "127.0.0.1",
    open: true,
    compress: true,
    port: "0.0.0.0",
  },
};
