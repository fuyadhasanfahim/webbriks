/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'iili.io',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.pathedits.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.prod.website-files.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'www.dropbox.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
