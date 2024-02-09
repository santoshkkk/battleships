const path = require('path');

module.exports = {
  entry: './server.js', // Update the entry point to server.js
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // Add other configuration options as needed
  resolve: {
    fallback: {
      "zlib": false,
      "querystring": false,
      "path": false,
      "crypto": false,
      "stream": false,
      "http": false,
      "fs": false,
      "url": false,
      "util": false
    }
  }
};
