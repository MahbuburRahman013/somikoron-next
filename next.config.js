/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**" || "mona-ai.mn",
      },
    ],
  },
};

module.exports = nextConfig;
