import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No webpack config needed for Turbopack
  images: {
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
