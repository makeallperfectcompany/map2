import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
  },
  experimental: {
    optimizePackageImports: ["react", "react-dom"],
  },
};

export default nextConfig;
