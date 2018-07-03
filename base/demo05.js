/*  koa路由   */
const Koa = require('koa')
const app = new Koa()
const fs = require('fs')
app.use(async(ctx) => {
	let url = ctx.request.url;
	let html = await route(url);
	ctx.body = html;
})

async function route(url) {
	let pageUrl = '404.html'
	switch(url) {
		case '/':
			pageUrl = 'index.html'
			break
		case '/index':
			pageUrl = 'index.html'
			break
		case '/todo':
			pageUrl = 'todo.html'
			break
		case '/404':
			pageUrl = '404.html'
			break
		default:
			break
	}

	let html = await render(`./page/${pageUrl}`)
	return html
}

function render(page) {
	return new Promise((resolve, reject) => {
		fs.readFile(page, 'binary', (err, data) => {
			if(err) {
				reject(err)
			} else {
				resolve(data)
			}
		})
	})
}

app.listen(3000, () => {
	console.log('server is starting at port 3000')
	console.log('访问   127.0.0.1:3000/index')
	console.log('访问   127.0.0.1:3000/todo')
	console.log('访问   127.0.0.1:3000/other')
})