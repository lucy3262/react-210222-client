const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addLessLoader,
} = require("customize-cra");
const path = require("path");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
// .BundleAnalyzerPlugin;
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
// const myPlugin = [new BundleAnalyzerPlugin()];

function pathResolve(pathurl) {
  return path.join(__dirname, pathurl);
}
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" },
  }),
  addWebpackAlias({
    "@static": pathResolve("./src/static"),
    "@redux": pathResolve("./src/redux"),
    "@components": pathResolve("./src/components"),
    "@api": pathResolve("./src/api"),
    "@config": pathResolve("./src/config"),
    "@containers": pathResolve("./src/containers"),
  }),
  (config) =>
    // 去掉打包生产map 文件
    // config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
    // if(process.env.NODE_ENV==="production") config.devtool=false;
    // if(process.env.NODE_ENV!=="development") config.plugins = [...config.plugins,...myPlugin]
    //1.修改、添加loader 配置 :
    config
);
