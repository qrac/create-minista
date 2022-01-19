const webpackConfig = {
  devServer: {
    open: ["/develop.html"],
  },
  entry: { bundle: "./src/assets/index.css" },
}

module.exports = webpackConfig
