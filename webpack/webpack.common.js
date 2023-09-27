const path = require('path')
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      "@apps": path.resolve(__dirname, "../src/apps"),
      "@assets": path.resolve(__dirname, "../src/assets"),
      "@enums": path.resolve(__dirname, "../src/enums"),
      "@pages": path.resolve(__dirname, "../src/pages"),
      "@routes": path.resolve(__dirname, "../src/routes"),
      "@utils": path.resolve(__dirname, "../src/utils"),
      "@context": path.resolve(__dirname, "../src/context"),
      "@globalTypes": path.resolve(__dirname, "../src/types"),
      "@components": path.resolve(__dirname, "../src/components"),
    },
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
      },
      {
          test: /\.(?:css|scss)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
      },
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
