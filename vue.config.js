module.exports = {
	lintOnSave: false,
	publicPath: './',
	devServer: {
		// open: true, //是否自动弹出浏览器页面
		// host: "localhost",
		// port: '8080',
		proxy: {
			'/node': {
				target: 'http://1.15.55.30:3001', // 请求服务器根路径,这里必须加上 http/https://
				changeOrigin: true, // 是否跨域
				// ws: true,   // websocket
				pathRewrite: { // 重写路径: 当检测到请求地址里包含 /v1 时,将此路径进行跨域代理操作
					'^/node': 'api'
				}
			},
			'/local': {
				target: 'http://localhost:3001', // 请求服务器根路径,这里必须加上 http/https://
				changeOrigin: true, // 是否跨域
				// ws: true,   // websocket
				pathRewrite: { // 重写路径: 当检测到请求地址里包含 /v1 时,将此路径进行跨域代理操作
					'^/local': '/api/api_list'
				}
			}
		}
	}
}