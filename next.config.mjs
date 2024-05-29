import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const vanillaExtractNextJSConfig = createVanillaExtractPlugin({
  webpack(config, options) {
    return config;
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...vanillaExtractNextJSConfig,
  output: 'export',
};

export default nextConfig;
