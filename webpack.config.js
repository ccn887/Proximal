var webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: ['babel-polyfill','./client/index.js'],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    })
],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env'] // if you aren't using 'babel-preset-env', then omit the 'env'
        }
      }
    ]
  }
};
