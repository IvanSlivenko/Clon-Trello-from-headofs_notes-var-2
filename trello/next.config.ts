import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname, // ставимо корінь проєкту
  },
};

export default nextConfig;
