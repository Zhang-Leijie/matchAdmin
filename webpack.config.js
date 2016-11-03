var path = require('path')
module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js'
  },
  module: {
      //加载器配置
      loaders: [
          { test: /\.vue$/,loader: 'vue'},
          {test: /\.js$/,loader: 'babel',exclude: /node_modules/},
          {test: /\.less$/, loader: 'style!css!less' }
      ]
  },
  resolve: {
      alias: {
        '~': path.join(__dirname)
      }
  },
  devServer: {
    publicPath: '/dist',
    hot: true,
    port: 2334
  }
}

if (process.env.NODE_ENV === 'production') {
  /*module.exports.devtool = '#source-map'*/
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}