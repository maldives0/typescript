import * as path from "path";
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

import { Configuration } from "webpack";
const config: Configuration = {
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },
  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
  },
};
export default config;
