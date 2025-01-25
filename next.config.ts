import type { NextConfig } from 'next';
import { resolve } from 'path';

const nextConfig: NextConfig = {
  eslint: {
    dirs: [resolve(__dirname, './src')], // Resolve o caminho absoluto para o diretório 'src'
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
