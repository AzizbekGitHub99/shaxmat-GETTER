/** @type {import('next').NextConfig} */
import { withNextVideo } from 'next-video/process'

const nextConfig = {
  //   output: "standalone",
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.(mp4)$/,
  //     type: "asset/resource",
  //   });
  //   return config;
  // },
};

export default withNextVideo(nextConfig);
