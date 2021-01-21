const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const devServer = new WebpackDevServer(
  webpack({
    devtool: "inline-source-map",
    entry: ["./demo/index"],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "history.min.js",
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./demo/index.html"),
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
      extensions: [".js", ".jsx", ".json"],
      alias: {
        "@": path.resolve("src"),
      },
    },
    watch: true,
  }),
  {
    publicPath: "/",
    hot: true,
    historyApiFallback: false,
    stats: { colors: true },
    disableHostCheck: true,
    host: "127.0.0.1",
    open: true,
  }
);
devServer.listen(8081, "0.0.0.0", (error) => {
  if (error) {
    throw error;
  }
});
