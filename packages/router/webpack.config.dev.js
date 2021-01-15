const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./examples/index.js",
  output: {
    filename: path.join(__dirname, "../../public/index.html"),
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      // 处理css
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // 处理图片
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      // 处理字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.js?$/,
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
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../../public/index.html"),
      filename: "index.html",
      compile: true,
      inject: true,
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    compress: true,
    hot: true,
    host: "0.0.0.0",
    port: 8002,
  },
};
