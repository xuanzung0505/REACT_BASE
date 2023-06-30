const path = require('path')
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    // new CopyPlugin({
    //   patterns: [{
    //     from: 'source',
    //     to: 'dest',
    //     noErrorOnMissing: true
    //   }]
    // }),
    new Dotenv(),
    // new NodePolyfillPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
      // {
      //     test: /\.(?:css|scss)$/,
      //     use: ['style-loader', 'css-loader', 'sass-loader'],
      // },
      // {
      //     test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
      //     type: 'asset/resource',
      // },
      // {
      //     test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
      //     type: 'asset/inline',
      // },
    ]
  },
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, '../build')
  },
}
