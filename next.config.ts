import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Force Turbopack to treat the repo root (this directory) as the project root.
    root: __dirname,
  },
};

export default nextConfig;
