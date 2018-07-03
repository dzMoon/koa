/*  koa-router路由  父路由+子路由 */
const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')

const home = new Router()
home.get('/index', (ctx, next) => {
	ctx.body = 'home.index'
}).get('/more', (ctx, next) => {
	ctx.body = 'home.more'
})

const page = new Router()
page.get('/index', (ctx, next) => {
	ctx.body = 'page.index'
}).get('/more', (ctx, next) => {
	ctx.body = 'page.more'
})

//装载所有子路由
let router = new Router();
router.use('/home', home.routes(), home.allowedMethods());
router.use('/page', page.routes(), page.allowedMethods());

//加载路由中间件
app
	.use(router.routes())
	.use(router.allowedMethods())

app.listen(3000, () => {
	console.log('server is starting at port 3000')
	console.log('访问   127.0.0.1:3000/home/index')
	console.log('访问   127.0.0.1:3000/home/more')
	console.log('访问   127.0.0.1:3000/page/index')
	console.log('访问   127.0.0.1:3000/page/more')
})