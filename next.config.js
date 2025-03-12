/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
      },
      {
        hostname: 'bright-energy.eu',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: "laadexpert.s3.eu-north-1.amazonaws.com",
      },
      {
        hostname: "dx8uea1j8p9gd.cloudfront.net"
      }
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default config;
