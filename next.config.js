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
        bodySizeLimit: '5mb',
        },
    },
};

module.exports = nextConfig;
