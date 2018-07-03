/*koa框架接收 post请求*/
const Koa = require('koa')
const app = new Koa()

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
		let pastData = await getPostData(ctx)
		ctx.body = pastData;
	} else {
		ctx.body = '404'
	}
})

function getPostData(ctx) {
	return new Promise((resolve, reject) => {
		try {
			let postData = ''
			ctx.req.on('data', (data) => {
				postData += data
			})
			ctx.req.addListener("end", function() {

				resolve(parseData(postData))
			})
		} catch(e) {
			reject(e)
		}
	})
}

function parseData(data) {
	let queryData = {};
	let dataArr = data.split('&')
	for(let [index, queryStr] of dataArr.entries()) {
		let itemList = queryStr.split('=');
		queryData[itemList[0]] = decodeURIComponent(itemList[1]);
	}
	return queryData
}
app.listen(3000, () => {
	console.log('server is starting at port 3000')
})