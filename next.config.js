/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "toolbox.marketingtools.apple.com",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
