import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        hostname: 'img.freepik.com',
        protocol: 'https',
        port: ''
      },
      {
        hostname: 'cdn.pixabay.com',
        protocol: 'https',
        port: ''
      },
      {
        hostname: 'avatars.githubusercontent.com',
        protocol: 'https',
        port: ''
      }
    ]
  }
  
  
};

export default nextConfig;
