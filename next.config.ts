import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {},
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
