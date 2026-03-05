import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' || process.env.NODE_ENV === 'production' && !process.env.VERCEL;

const nextConfig: NextConfig = {
  // Only use export output and basePath if we're on GitHub Pages
  output: isGitHubPages ? 'export' : undefined,
  basePath: isGitHubPages ? '/myportfolio' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
