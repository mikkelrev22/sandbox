const path = require('path')
module.exports = {
  mode: 'development',
  entry: `./client/src/index.js`,
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: "bundle.js",
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js|jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',          
        options:{
          presets: [
            ["@babel/preset-env", {
            "targets": "defaults" 
            }],  '@babel/preset-react'
          ],
          plugins: [
            [
              "@babel/plugin-proposal-class-properties"
            ]
        ]
        }
      }
    ]
  }
};