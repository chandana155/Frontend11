const path = require('path');

module.exports = {
  webpack: {
    alias: {
      'pdfjs-dist': path.resolve(__dirname, 'node_modules/pdfjs-dist'),
    },
    configure: (webpackConfig, { env }) => {
      // Disable source maps in development to avoid react-datepicker warnings
      if (env === 'development') {
        webpackConfig.devtool = false;
      }

      // Add ignoreWarnings as backup
      webpackConfig.ignoreWarnings = [
        ...(webpackConfig.ignoreWarnings || []),
        /Failed to parse source map/,
        /react-datepicker/,
        /ENOENT: no such file or directory/,
      ];
      
      return webpackConfig;
    },
  },
}; 