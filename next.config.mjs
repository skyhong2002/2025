/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.GHA_OWNER === "sitcon-tw" ? "/2025" : "",
  trailingSlash: true,
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
