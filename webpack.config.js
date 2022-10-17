const currentTask = process.env.npm_lifecycle_event
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


const config = {
    entry: [`./src/app.js`],
    output : {
        path: path.resolve(__dirname, `public`),
        filename: `bundle.js`
    },
    plugins: [],
    mode: 'development',   
    devServer: {
        port: 3000,
        static: path.resolve(__dirname, 'public'),
        hot: true,
        host: '0.0.0.0',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            }
        ]
    }
}


if (currentTask == "build") {
    config.mode = "production"
    config.module.rules[0].use[0] = MiniCssExtractPlugin.loader
    config.plugins.push(new MiniCssExtractPlugin({ filename: "main.css" }))
}

module.exports = config