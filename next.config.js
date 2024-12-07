/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
              source: "/",
              destination: "/dashboard",
              permanent: true,
            },
        ];
    },
    experimental: {
        serverActions: {
        bodySizeLimit: '10mb',
        },
    },
};

module.exports = nextConfig;
