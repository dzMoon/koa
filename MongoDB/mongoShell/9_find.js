const startTime = new Date();

const db = connect("company");

var rs = db.randomInfo.find({name:"6hp7ok1kg"});

rs.forEach( val => { printjson(val) });




const runTime = new Date() - startTime;


print(runTime);

//建立索引
// db.randomInfo.ensureIndex({name:1})