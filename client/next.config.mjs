/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com https://pagead2.googlesyndication.com https://www.googletagservices.com https://adservice.google.com; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com; img-src 'self' data: https://pagead2.googlesyndication.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' ws: wss: https://cdn.jsdelivr.net https://pagead2.googlesyndication.com https://codeshare-backend-h7xp.onrender.com; worker-src 'self' blob:; frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com; object-src 'none';",
                    },
                ],
            },
        ];
    },
    experimental: {
        optimizePackageImports: ['lucide-react', 'react-icons', 'framer-motion'],
    },
};

export default nextConfig;
