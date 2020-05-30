module.exports = {
    devServer: {
        port: 4000,
        proxy: 'http://localhost:8080/api'
    },
    configureWebpack: {
        devtool: 'source-map'
    }
}
