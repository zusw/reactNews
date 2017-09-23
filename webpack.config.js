var webpack = require("webpack");
var openBrowser  = require("open-browser-webpack-plugin");
var HtmlWebpackPlugin  = require("html-webpack-plugin");

module.exports = {
  entry:__dirname+"/app/js/app.js",
  output:{
    path:__dirname+"/build",
    filename:"bundle.js"
  },
  module:{
    loaders:[
      {
        test:/\.(js|jsx)$/,
        loader:"babel-loader"
      },
      {
        test:/\.css$/,
        loader:"style-loader!css-loader"
      },
      {
        test:/\.(png|jpg|gif)$/,
        loader:"url-loader?limit=8129"
      },
      {
        test:/\.less$/,
        loader:"style-loader!css-loader!less-loader"
      },
      {
        test:/\.json$/,
        loader:"json-loader"
      }
    ]
  },

  plugins:[
    new openBrowser({
      url:"http://localhost:8080"
    }),

    new HtmlWebpackPlugin({
      template: __dirname +'/app/index.tmpl.html'
    })
  ]
}
