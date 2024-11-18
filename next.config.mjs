/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/2025",
  trailingSlash: true,
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
