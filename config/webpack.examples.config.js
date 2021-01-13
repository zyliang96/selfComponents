const path = require("path");

module.exports = {
  mode: "development",
  entry: "../examples/index.tsx",
  output: {
    filename: path.resolve(__dirname, "../public/index.html"),
    path: path.resolve(__dirname, "../dist/examples"),
    publicPath: '/',
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
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"),
      filename: "index.html",
      compile: true,
      inject: true,
    }),
  ],
};
