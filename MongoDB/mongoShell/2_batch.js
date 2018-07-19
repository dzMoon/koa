const db = connect("log");

const startTime = new Date().getTime();
const arr = [];
for(let i = 0; i<1000; i++){
	arr.push({'number':i});
}
db.login.insert(arr);

const runTime = new Date().getTime() - startTime;

print("数据插入所用时间:" + runTime);