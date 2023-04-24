const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (env) => {
  return {
    mode: 'development',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: env.production ? 'system' : '',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: { loader: 'babel-loader' },
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      !env.production &&
        new HTMLWebpackPlugin({
          template: './public/index.html',
        }),
    ].filter(Boolean),
    externals: env.production ? ['react', 'react-dom'] : [],
  }
}
