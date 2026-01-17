/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.s3.amazonaws.com', // Matches any S3 bucket
      },
      {
        protocol: 'https',
        hostname: '*.s3.*.amazonaws.com', // Matches region-specific S3 URLs
      },
    ],
  },
};

export default nextConfig;
