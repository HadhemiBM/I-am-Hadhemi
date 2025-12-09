/** Minimal Next.js config for static export (GitHub Pages). */
module.exports = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}
