/** @type {import('next').NextConfig} */
const nextConfig = {
    output : process.env.RUN_MODE === 'dev' ? undefined : "export",
    images: {
        unoptimized: true,
    },
    ...(process.env.RUN_MODE === 'dev' ? {
        async rewrites() {
            return [
                {
                    source: '/api/:path*',
                    destination: 'http://localhost:8080/api/:path*',
                },
            ]
        }
    } : {})

}

module.exports = nextConfig