/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');
const base = require('./webpack.base.config');

module.exports = merge(base, {
  entry: './src/main/index.ts'
});
