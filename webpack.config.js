const currentTask = process.env.npm_lifecycle_event
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

const config = {
  entry: [`./public/App.js`],
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, `public`),
    filename: `bundled.js`,
  },
  plugins: [],
  mode: "development",
  devServer: {
    port: 8080,
    static: path.resolve(__dirname, "public"),
    hot: true,
    liveReload: false,
    historyApiFallback: { index: "index.html" },
    host: "0.0.0.0",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules | bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
}

if (currentTask == "build") {
  config.mode = "production"
  config.module.rules[0].use[0] = MiniCssExtractPlugin.loader
  config.plugins.push(new MiniCssExtractPlugin({ filename: "main.css" }))
}

module.exports = config
