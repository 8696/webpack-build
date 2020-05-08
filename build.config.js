module.exports = env => {

  const config = {
    mode: env.NODE_ENV,
    devtool: 'source-map',
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
    require('webpack-merge')(config, {
      output: {
        filename: config.mode === 'development' ? 'dist.node.dev.js' : 'dist.node.min.js',
        libraryTarget: 'commonjs2',
      }
    }),
    require('webpack-merge')(config, {
      output: {
        filename: config.mode === 'development' ? 'dist.dev.js' : 'dist.min.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
      }
    }),
  ];
};

