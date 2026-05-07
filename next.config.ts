import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "bqp.vn" },
      { protocol: "https", hostname: "bqp.vn" },
    ],
  },
};

export default nextConfig;
