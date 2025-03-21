import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "preview.iwedding.info" }],
  },
};

export default nextConfig;
