const {resolve} = require('path');

module.exports = {

  entry     : [
    resolve(__dirname, 'src', 'index.js')
  ],
  output    : {
    path          : resolve(__dirname, 'dist'),
    filename      : 'backpack.js',
    library       : "Backpack",
    libraryTarget : "umd",
  },
  context   : resolve(__dirname, 'src'),
  devtool   : 'inline-source-map',
  externals : {
    'cropduster' : {
      root : 'CD'
    }
  },
  module    : {
    rules : [
      {
        test    : /\.js$/,
        exclude : /node_modules/,
        use     : [
          {
            loader : 'babel-loader',
          }
        ],
      },
    ],
  },

};
