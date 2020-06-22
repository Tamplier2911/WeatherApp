const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "",
  },

  mode: "production",

  module: {
    rules: [
      {
        // https://github.com/webpack-contrib/file-loader - reference
        // https://github.com/webpack-contrib/url-loader - might aswell consider
        // https://stackoverflow.com/questions/33058964/configure-webpack-to-output-images-fonts-in-a-separate-subfolders
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          outputPath: "images",
          publicPath: "images/",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        path.join(process.cwd(), "build/**/*"),
      ],
    }),
    new HtmlWebpackPlugin({
      // https://github.com/jantimon/html-webpack-plugin favicon and more
      title: "Weather App",
      template: "./public/index.html",
      filename: "./index.html",
      description: "Quick weather forecast for your location.",
    }),
  ],
};
