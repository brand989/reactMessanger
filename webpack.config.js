const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './index.jsx'
  },
  context: path.resolve(__dirname, 'src'),
  devtool: 'inline-source-map',
   devServer: {
    static: './dist'
   },
     module: {
         rules: [
             {
                 test: /\.jsx?$/,
                 include: path.resolve(__dirname, 'src'),
                 exclude: path.resolve(__dirname, 'node_modules'),
                 loader: 'babel-loader',
                 options: {
                     presets: ['@babel/env', '@babel/react'],
                     plugins: ['@babel/plugin-proposal-class-properties']
                 }
             },
             {
              test: /.(css|scss)$/,
              use: ["style-loader", "css-loader", "sass-loader"],
              },
         ]
     },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      inject: false,
      template: 'index.html'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
      extensions: ['.js', '.jsx']
  }
};