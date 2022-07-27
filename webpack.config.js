const currentTask = process.env.npm_lifecycle_event
const path = require(`path`)
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


const config = {
    entry: [`./app/app.js`, `./app/pageclip.js`],
    output : {
        filename: `myPackage.js`,
        path: path.resolve(__dirname, `dist`)
    },
    plugins: [],
    mode: 'development',   
    devServer: {
        port: 8080,
        static: path.resolve(__dirname, 'dist'),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
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