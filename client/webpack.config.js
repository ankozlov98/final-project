const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
   output: {
    libraryExport: 'default'
   },
    module: {

    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [htmlPlugin],
  devServer: {
    open: "Chrome",
    proxy: {
      '/pokemons': 'http://localhost:5000'
    }
  },
  
};