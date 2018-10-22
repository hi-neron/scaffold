const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: { main: path.resolve(__dirname, "src/app.js") }, // string | object | array
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    path: path.resolve(__dirname, "public"), // string
    filename: "app.js", // string
  },
  module: {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            // options: {
            //   minimize: true
            // }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: 'img/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2|)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: 'fonts/[name].[ext]',
              mimetype: 'application/font-woff',
              publicPath: '../'
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: ".img/[name].[ext]",
              limit: 10000
            }
          },
          {
            loader: "img-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
  // list of additional plugins
  /* Advanced configuration (click to show) */
}