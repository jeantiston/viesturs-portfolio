const path = require('path');
const _ = require('lodash');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@sections': path.resolve(__dirname, 'src/sections')
        }
      }
    })
  }