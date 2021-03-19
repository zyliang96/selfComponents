module.exports = {
    // page接收的后缀类型
    pageExtensions: ["jsx", "js", "ts", "tsx"],
    // 路由/ 重定向到/home
    async redirects() {
        return [
            {
                source: "/",
                destination: "/home",
                permanent: true,
            },
        ];
    },
    // 自定义webpack配置
    webpack: (config, options) => {
        config.module.rules = config.module.rules.concat([
            {
                test: /\.ejs$/,
                loader: "ejs-loader",
            },
            {
                test: /\.(tsx?|js)$/,
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
        ])    
        return config
      },
};
