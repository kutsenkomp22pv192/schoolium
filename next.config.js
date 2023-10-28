const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
module.exports = withPlugins([
  [optimizedImages, {
    mozjpeg: {
      quality: 80,
    },
    pngquant: {
      speed: 3,
      strip: true,
      verbose: true,
    },
    imagesPublicPath: '/schoolium/_next/static/images/',
  }],
  {
    basePath: '/schoolium',
    assetPrefix: '/schoolium/',
    env,
  },
]);
// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   output: 'export',
//   basePath: '/schoolium',
//   // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
//   // trailingSlash: true,
 
//   // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
//   // skipTrailingSlashRedirect: true,
 
//   // Optional: Change the output directory `out` -> `dist`
//   // distDir: 'dist',
// }
 
// module.exports = nextConfig
