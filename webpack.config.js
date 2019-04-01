const path = require('path');
const webpack = require('webpack');

module.exports = {
  //Define application starting point
  entry: './src/index.js',
  //Define running mode
  mode: 'development',
  //Define how exported JavaScript modules are exported
  module: {
    rules: [
      //Transform ES6 and JSX syntax
      {
        //Conditions to match files
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        //Define loader
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      //Processing css
      {
        //Conditions
        test: /\.css$/,
        //Define loaders
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  //Define which files with following extensions will be resolved
  resolve: { extensions: ["*", ".js", ".jsx"] },
  //Define where to put bundled code
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  //Setting up dev server
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
    watchContentBase: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}