const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: 'main.css',
    allChunks: true
});

module.exports = {
  mode: 'production',  
  entry: "./public/js/app.js",
  output: {
    path: path.resolve(__dirname, "public/build"),
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: { presets: ["env"] }
        }
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
            fallback: 'style-loader',
                use: [
                    { loader: 'css-loader', options: { minimize: true } },
                    { loader: 'sass-loader'}
                ]
        })
      }
    ]
  },
  plugins: [extractSass]
};