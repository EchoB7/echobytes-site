import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/echobytes-site",
  images: { unoptimized: true },
};

export default nextConfig;
