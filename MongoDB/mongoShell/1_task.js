const loginName = "admin";
const time = Date.parse(new Date())
const data = {name:loginName,time:time};

const db = connect("log");
db.login.insert(data);

print("[task]:connect success");