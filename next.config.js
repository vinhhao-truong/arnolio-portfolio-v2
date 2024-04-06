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
    MAILJET_SECRET_KEY: "9a5e8f7c77b5a48ed142f7db52389bc6",
    ARNOLIO_EMAIL: "vinhhao.truong.18@gmail.com",
    PERSONAL_EMAIL: "vinhhao.truong.52@gmail.com",
  },
};

module.exports = nextConfig;
