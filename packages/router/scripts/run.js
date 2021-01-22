const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const devServer = new WebpackDevServer(
  webpack({
    
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
