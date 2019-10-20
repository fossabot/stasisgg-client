/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
const base = require('./webpack.base.config');

module.exports = merge(base, {
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg?$/,
        use: [{ loader: 'react-svg-loader' }]
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          publicPath: '..',
          context: 'src'
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]',
          publicPath: '..',
          context: 'src'
        }
      }
    ]
  }
});
