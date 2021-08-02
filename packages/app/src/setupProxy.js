/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
  app.use(
    'https://imgur.com',
    createProxyMiddleware({
      target: 'https://imgur.com',
      changeOrigin: true,
    })
  );
  app.use(
    'https://www.reddit.com',
    createProxyMiddleware({
      target: 'https://www.reddit.com',
      changeOrigin: true,
    })
  );
};
