const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devServer = new WebpackDevServer(webpack({
    // devtool: 'eval',
    devtool: 'inline-source-map',
    entry: [
        './index.tsx'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html'),
            filename: 'index.html',
            compile: true,
            inject: true,
        }),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.ejs$/,
                loader: "ejs-loader"
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?.+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(jpe?g|png|gif)(\?.+)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.md$/,
                loader: 'raw-loader'
            }
        ]
    },
    mode: 'development'
}), {
    publicPath: '/',
    hot: true,
    historyApiFallback: false,
    stats: {colors: true},
    disableHostCheck: true,
    host: '127.0.0.1',
    open:true,
})
devServer.listen(8001, '0.0.0.0', error => {
    if (error) {
        throw error;
    }
});
