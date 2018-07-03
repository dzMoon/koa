/*访问静态资源 koa-static*/
const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const app = new Koa()

const staticUrl = './static'
app.use(static(path.join(__dirname, staticUrl)))
app.use(async(ctx) => {
	ctx.body = 'hello world'
})

app.listen(3000, () => {
	console.log('server is starting at the port 3000')
})