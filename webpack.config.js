const path = require("path");

const config = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: extractCSS.extract({ use: ["css-loader", "sass-loader"] })
      },
      {
        test: /\.styl$/,
        use: extractCSS.extract({ use: ["css-loader", "stylus-loader"] })
      },
      {
        test: /\.svg$/,
        use: "file-loader"
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png"
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
