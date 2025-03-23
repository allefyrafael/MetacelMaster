/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
  // Adicione o nome do projeto aqui
  env: {
    PROJECT_NAME: 'MetacelMaster',
  },
};

export default nextConfig;

