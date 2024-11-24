import { createProxyMiddleware } from 'http-proxy-middleware';

export default function handler(req, res) {
    const proxy = createProxyMiddleware({
        target: process.env.BACKEND_API_URL,
        changeOrigin: true,
        pathRewrite: {
            '^/api': '',
        },
    });

    return proxy(req, res);
}