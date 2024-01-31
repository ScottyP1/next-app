/** @type {import('next').NextConfig} */
const nextConfig = {
    // next.config.js
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ocawolyqyqdehrepqztj.supabase.co',
                pathname: '**'
            },
        ],
    },
};

export default nextConfig;
