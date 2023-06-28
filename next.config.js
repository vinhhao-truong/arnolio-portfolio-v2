/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    MAILJET_API_KEY: "b472ab590aef71d36795db49dfa06780",
    MAILJET_SECRET_KEY: "9fdd897cef8d666fbceac1642aa0ed50",
    ARNOLIO_EMAIL: "arnold.truong@arnolio.dev",
    PERSONAL_EMAIL: "vinhhao.truong.52@gmail.com",
  },
};

module.exports = nextConfig;
