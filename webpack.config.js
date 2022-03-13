const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  entry: {
    "large-number": path.join(__dirname, "./src"),
    "large-number.min": path.join(__dirname, "./src")
  },
  mode: "none", // 因为要生产处dev版本的, 所以如果开启prod的话, 就会默认全部压缩
  output: {
    filename: "[name].js",
    library: "my-large-number", // 打包出的库的名字
    libraryTarget: "umd", // 打包之后, 可以通过AMD CommonJs ES6 Moudle  script标签 全局变量等方式引入
    libraryExport: "default", //设置此项, 导出对象可以不通过 "\.default" 对象引入
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ // 压缩指定代码, 并支持es6的编译
        include: /\.min\.js$/
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
