const path = require("path")
// const HtmlWebpackPlugin = require("html-webpack-plugin")

const config = {
  entry: [`./src/App.js`],
  output: {
    // publicPath: "/",
    path: path.resolve(__dirname, `src`),
    filename: `bundled.js`,
  },
  // plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  mode: "development",
  devServer: {
    port: 8080,
    static: path.resolve(__dirname, "src"),
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

module.exports = config
