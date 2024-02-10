/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'denomades.s3.us-west-2.amazonaws.com',
        port: '',
        pathname: '/blog/wp-content/uploads/2020/09/06164027/laguna-69-cuesta-serena-boutique-hotel-1024x597.jpg'
      }
    ]
  }
};

export default nextConfig;
