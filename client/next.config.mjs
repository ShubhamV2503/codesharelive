/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://pagead2.googlesyndication.com https://www.googletagservices.com https://adservice.google.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://pagead2.googlesyndication.com; font-src 'self' data:; connect-src 'self' ws: wss: https://pagead2.googlesyndication.com; worker-src 'self' blob:; frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com; object-src 'none';",
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
