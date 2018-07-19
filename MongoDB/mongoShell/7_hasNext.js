//1 hasNext
// const db = connect("company");
// const result = db.workmate.find();

// while(result.hasNext()){
// 	printjson(result.next())
// }

//2 forEach

const db = connect("company");
const result = db.workmate.find();

result.forEach(function(result) {
	printjson(result)
})
