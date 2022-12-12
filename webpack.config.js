import * as path from "path";
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        /* additional options here */
        parallel: true,
      }),
    ],
  },
  entry: [
    require.resolve("./polyfills"),
    require.resolve("react-dev-utils/webpackHotDevClient"),
    path.appIndexJs,
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "../src"), // <--- Here
    },
  },
  test: /\.svg$/,
  use: [
    {
      loader: "babel-loader",
      options: {
        presets: ["preact", "env"],
      },
    },
    {
      loader: "@svgr/webpack",
      options: { babel: false },
    },
  ],
  rules: [
    {
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    },
  ],
};
