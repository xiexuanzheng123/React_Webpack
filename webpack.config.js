var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: ['webpack/hot/dev-server', __dirname + '/app/main.js'], //__dirname是node中一个全局变量，指向当前执行脚本所在的目录
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase:'./build',
    //colors: true,
    historyApiFallback: true,
    inline: true,
    port: 8080,
    //process: true,
  }
};