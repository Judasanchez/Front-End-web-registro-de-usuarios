const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    server: './server.ts',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  target: 'node',
  mode: 'none',
  externals: [/(node_modules|main\..*\.js)/],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
