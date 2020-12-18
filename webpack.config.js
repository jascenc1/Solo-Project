const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');


module.exports = {
  // our react entry file that inside a source file
  entry: path.resolve(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'), //it will be placed in this build folder
    filename: 'bundle.js'
  }, 
  mode: process.env.NODE_ENV,
  module: { // all the modules/files within a project and  specifies how each file is going to be treated that we come across via loaders 
    rules: [ // rules consist of three things: condition (which type of file transformation is applied to),  result and there might be nested rules too
      {
      test: /\.jsx?/, // we can tell which file we are choosing via tests
      // exclude: /(node_modules)/, // we exclude going through node modules because we should already assume that they should be in a format that is workable and thus don't need transpiling 
      exclude: /node_modules/,
      use: { // referred to as a rule result and is used when a rule condition matches. ie we are going to "use" a loader 
        loader: 'babel-loader', 
        options: { // then we specify options for each line of file
          presets: ['@babel/preset-env', '@babel/preset-react'] // in a babel a preset allows us to work with any and all jsx/react files. within this environemnt we are only going to be interested in jsx files. but preset-env transpiles all es6 code and the second file tells it to only work on react code
        }
      }
      }, 
      // {
      //   test:  /\.s[ac]ss$/i, // same thing but will run these rules on any file that ends with s[ac]ss. can also use /\.s?css$/ to track anything with scss or css files 
      //   exclude: /(node_modules)/,
      //   use:  [
      //     // creates style nodes from JS strings
      //     'style-loader',
        
      //     // transolates CSS into commonJS
      //     'css-loader',
      //     // compiles Sass to CSS
      //     'sass-loader'
      //   ] // this array is done in reverse order . can also use style!css!sass. ie is read from right to left 
      // },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }, 
  devServer: { // allows you to create a bundled file in memory(in ram) and this is served to express which allows us to see development locally 
    publicPath: '/build/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    })
  ]
}