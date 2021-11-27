const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const conf = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    //contentBase: path.resolve(__dirname, 'dist')
  },
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1, sourceMap: true },
          },
          { loader: "postcss-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "/img",
          //   outputPath: path.resolve(__dirname, "dist/img/"),
          publicPath: "./src/public/img",
          //   publicPath: "public/img",
          //   publicPath: "./src/public/img",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
};

module.exports = (env, options) => {
  if (options.mode !== "development") {
    conf.devtool = "";
    conf.mode = "production";
    conf.devServer = {};
  }

  return conf;
};
