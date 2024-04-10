const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.clerk.com" },
      { protocol: "https", hostname: "images.clerk.dev" },
      { protocol: "https", hostname: "uploadthing.com" },
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Here we manually add the 'encoding' module to the client-side bundle
      config.resolve.fallback = { 
        ...config.resolve.fallback,
        // Add the encoding polyfill here
        encoding: require.resolve('encoding')
      };
    }
    return config;
  },
};

module.exports = nextConfig;
