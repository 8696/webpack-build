module.exports = env => {
  const merge = require('webpack-merge');
  const isDev = env.NODE_ENV === 'development';
  const config = {
    mode: env.NODE_ENV,
    devtool: isDev ? 'source-map' : 'none',
    entry: {
      index: './index.ts',
    },
    output: {
      path: require('path').resolve(__dirname, 'dist'),
      library: 'Dist',
    },
    resolve: {
      extensions: ['.js', '.ts'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {loader: 'babel-loader'}
          ],
          exclude: /node_modules/
        },
        {
          test: /\.ts$/,
          use: [
            {loader: 'babel-loader'},
            {loader: 'ts-loader'}
          ]
        }
      ]
    },
  };
  return [
    merge(config, {
      output: {
        filename: isDev ? 'node.dev.js' : 'node.min.js',
        libraryTarget: 'commonjs2',
      }
    }),
    merge(config, {
      output: {
        filename: isDev ? 'browser.dev.js' : 'browser.min.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
      }
    }),
  ];
};

