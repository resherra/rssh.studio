const path = require('path')

const config = {
    entry: [`./src/app.js`],
    output : {
        path: path.resolve(__dirname, `public`),
        filename: `bundle.js`
    },
    plugins: [],
    mode: 'development',   
    devServer: {
        port: 5000,
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

module.exports = config