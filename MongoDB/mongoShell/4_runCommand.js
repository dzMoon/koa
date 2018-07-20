var myModify={
    findAndModify:"workmate",
    query:{"name":'JSPang'},
    update:{$set:{"age":18}},
    new:true    //更新完成，需要查看结果，如果为false不进行查看结果
}
var ResultMessage=db.runCommand(myModify);

printjson(ResultMessage)