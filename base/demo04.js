/*koa框架接收 post请求   
 * koa-bodyparser*/
const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser')
app.use(bodyparser())
app.use(async(ctx) => {
	if(ctx.request.url === '/' && ctx.request.method === 'GET') {
		let html = `
            <h1>Koa2 request post demo</h1>
            <form method="POST"  action="/">
                <p>userName</p>
                <input name="userName" /> <br/>
                <p>age</p>
                <input name="age" /> <br/>
                <p>webSite</p>
                <input name='webSite' /><br/>
                <button type="submit">submit</button>
            </form>
        `;
		ctx.body = html;
	} else if(ctx.request.url === '/' && ctx.request.method === 'POST') {
		let pastData = ctx.request.body
		ctx.body = pastData;
	} else {
		ctx.body = '404'
	}
})
app.listen(3000, () => {
	console.log('server is starting at port 3000')
})