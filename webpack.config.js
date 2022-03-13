const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  entry: {
    "large-number": path.join(__dirname, "./src"),
    "large-number.min": path.join(__dirname, "./src")
  },
  mode: "none",
  output: {
    filename: "[name].js",
    library: "my-large-number", // 打包出的库的名字
    libraryTarget: "umd", // 打包之后, 可以通过AMD CommonJs ES6 Moudle  script标签 全局变量等方式引入
    libraryExport: "default", //设置此项, 导出对象可以不通过 "\.default" 对象引入
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
