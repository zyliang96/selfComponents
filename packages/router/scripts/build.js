const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const webpackRunner = webpack({
  mode: "production",
  devtool: "inline-source-map",
  entry: "../src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "router.js",
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
    "dpl-react": {
      root: "DplReact",
      commonjs2: "dpl-react",
      commonjs: "dpl-react",
      amd: "dpl-react",
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
