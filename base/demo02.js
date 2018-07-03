/*koa框架接收 get请求*/
const Koa = require('koa')
const app = new Koa()

app.use(async(ctx) => {
	const url = ctx.url
	const req_qry = ctx.request.query
	const req_qrystr = ctx.request.querystring
	const ctx_qry = ctx.query
	const ctx_qrstr = ctx.querystring
	ctx.body = {
		url,
		req_qry,
		req_qrystr,
		ctx_qry,
		ctx_qrstr
	}
})
app.listen(3000, () => {
	console.log('server is starting at port 3000')
})