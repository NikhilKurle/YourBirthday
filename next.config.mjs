/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/YourBirthday',
  assetPrefix: '/YourBirthday/',
};

export default nextConfig;
