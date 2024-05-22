import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
   config.cache = false;
   return config;
 },
};

export default withContentlayer(nextConfig);
