const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

module.exports = {
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Index',
      template: `${PATHS.app}/room-1.html`,
      filename: `room-1.html`
    }),
    new HtmlWebpackPlugin({
      title: 'Index',
      template: `${PATHS.app}/room-2.html`,
      filename: `room-2.html`
    }),
    new HtmlWebpackPlugin({
      title: 'Index',
      template: `${PATHS.app}/room-3.html`,
      filename: `room-3.html`
    }),
    new HtmlWebpackPlugin({
      title: 'Index',
      template: `${PATHS.app}/room-4.html`,
      filename: `room-4.html`
    }),
  ],
  devServer: {
    overlay: {
      errors: true,
      warnings: false
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: "eslint-loader",
        options: {
          emitwarning: true,
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true
          }
        }
      }
    ],
  },
};
