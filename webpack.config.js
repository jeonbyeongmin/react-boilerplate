const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const getAbsolutePath = target => path.resolve(__dirname, target);

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  devtool: prod ? 'hidden-source-map' : 'eval',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      // 절대 경로 설정
      '@assets': getAbsolutePath('src/assets'),
      '@common': getAbsolutePath('src/common'),
      '@components': getAbsolutePath('src/components'),
      '@hooks': getAbsolutePath('src/hooks'),
      '@pages': getAbsolutePath('src/pages'),
      '@styles': getAbsolutePath('src/styles'),
    },
  },

  module: {
    rules: [
      // 이미지 로더
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'src/assets/images/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      // svg 로더
      {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
      },
      // 웹 폰트 로더
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'src/assets/fonts/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
