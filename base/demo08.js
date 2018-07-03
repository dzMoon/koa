/* koa-router 获取参数*/
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

//自定义路由
router.get('/', (ctx, next) => {
	ctx.body = ctx.query
})

//加载路由
app.use(router.routes()).use(router.allowedMethods())

//监听端口
app.listen(3000, () => {
	console.log('starting at port 3000')
})