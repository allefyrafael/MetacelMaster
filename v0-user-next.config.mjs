/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    // Otimização de imagens melhorada
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  // Adicione o nome do projeto aqui
  env: {
    PROJECT_NAME: 'MetacelMaster',
  },
  // Melhorias de performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    // Ativar brotli compression para melhor compressão
    compression: true,
    // Otimizações para modernos pacotes ESM
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
    ],
  },
};

export default nextConfig;

