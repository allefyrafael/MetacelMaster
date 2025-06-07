/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  env: {
    PROJECT_NAME: 'MetacelMaster',
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
    ],
  },
};

export default nextConfig;
