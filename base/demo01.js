function getSome() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve("long_time_value")
		},2000)
	})
}

async function test() {
	const v = await getSome()
	console.log(v)
	console.log(1)
}
test()
