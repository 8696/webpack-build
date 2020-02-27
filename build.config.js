const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: './src/index.ts',
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
module.exports = [
  require('webpack-merge')(config, {
    output: {
      filename: 'dist.node.min.js',
      libraryTarget: 'commonjs2',
    }
  }),
  require('webpack-merge')(config, {
    output: {
      filename: 'dist.min.js',
      libraryTarget: 'umd',
      umdNamedDefine: true
    }
  }),
];

