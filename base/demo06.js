/*  koa-router路由   */
const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router();

app
	.use(router.routes())
	.use(router.allowedMethods())

router
	.get('/', (ctx, next) => {
		ctx.body = 'index.html';
	})
	.get('/index', (ctx, next) => {
		ctx.body = 'index.html';
	})

app.listen(3000, () => {
	console.log('server is starting at port 3000')
	console.log('访问   127.0.0.1:3000')
	console.log('访问   127.0.0.1:3000/index')
})