//获取min-max的整数
function GetRandomNum (min,max) {
	return Math.round( Math.random() * (max-min)) + min;
}

function GetRadomUserName (min,max) {
	let tempStringArray= "123456789qwertyuiopasdfghjklzxcvbnm".split("");//构造生成时的字母库数组
    let outPuttext  = ""; //最后输出的变量
    for(let i = 0; i< GetRandomNum(min,max);i++) {
    	outPuttext = outPuttext + tempStringArray[Math.round( Math.random() * tempStringArray.length)]
    }
    return outPuttext;
}

const db = connect('company');;
db.randomInfo.drop();

var tempInfo = [];

for(let i=0;i<2000000;i++) {
	tempInfo.push({
		userName:GetRadomUserName(7,16),
		regeditTime: new Date(),
		randNum0:GetRandomNum(100000,999999),
        randNum1:GetRandomNum(100000,999999),
        randNum2:GetRandomNum(100000,999999),
        randNum3:GetRandomNum(100000,999999),
        randNum4:GetRandomNum(100000,999999),
        randNum5:GetRandomNum(100000,999999),
        randNum6:GetRandomNum(100000,999999),
        randNum7:GetRandomNum(100000,999999),
        randNum8:GetRandomNum(100000,999999),
        randNum8:GetRandomNum(100000,999999),
	})
}
db.randomInfo.insert(tempInfo);


