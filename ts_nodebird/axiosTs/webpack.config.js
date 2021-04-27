const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    index: './index.ts',
  },
  module: {
    rules: [
      {
        test: /.[js]s?$/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
          babelOptions: {
            babelrc: false,
            presets: ['@babel/preset-env'],
            plugins: ['add-module-exports'],
          },
          babelCore: '@babel/core',
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname), //dist가 아닌 root
    filename: '[name].js',
    library: 'axios',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
