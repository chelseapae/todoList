require("dotenv").config();
const path = require("path");

var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "main.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};



// require("dotenv").config();

// const path = require("path");

// module.exports = {
//   mode: "development",
//   entry: path.join(__dirname, "/client/index.jsx"),
//   output: {
//     path: path.join(__dirname, "/client/dist"),
//     filename: "bundle.js",
//   },
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'public'),
//     },
//     compress: true,
//     port: 3005,
//   },
//   devtool: "source-map",
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /nodeModules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },
//     ],
//   },

// };
