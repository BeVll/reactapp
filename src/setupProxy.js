const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/matches",
    "/foot",
    "/weatherforecast",
    "/table"
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7245/api',
        secure: false
    });

    app.use(appProxy);
    
};
