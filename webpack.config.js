const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { main: './components/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|gif|woff2|woff)$/,
        loader: 'file-loader'
      },
      // аналогично добавьте правило для работы с html
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        // применять это правило только к CSS-файлам
          test: /\.css$/,
        // при обработке этих файлов нужно использовать
        // MiniCssExtractPlugin.loader и css-loader
        loader: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { importLoaders: 1 }}, 'postcss-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html' // путь к файлу index.html
    }),
    new MiniCssExtractPlugin()
  ]
};
