module.exports = {
    devServer: {
        proxy: {
            "/api": {
                ws: false,
                target: "http://localhost:6789",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
};
