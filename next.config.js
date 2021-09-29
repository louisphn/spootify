const path = require('path')

module.exports = {
  reactStrictMode: true,
  distDir: '../.next',
  trailingSlash: true, //for api/nowplaying to work
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['mosaic.scdn.co'],
  },
}
