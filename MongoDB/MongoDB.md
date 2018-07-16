# mongoDB
> 特点:内部执行引擎为JS解释器, 把文档存储成bson结构,在查询时,转换为JS对象,并可以通过熟悉的js语法来操作.



mongo | 传统型数据库
---|---
表下的每篇文档,都可以有自己独特的结构(json对象都可以有自己独特的属性和值)| 结构化数据, 定好了表结构后,每一行的内容,必是符合表结构的,就是说--列的个数,类型都一样


### mongo入门命令

1. 查看当前的数据库
```
show dbs  
```
2.  选库
```
use databaseName
```
3.  查看当前库下的collection
```
show tables/collections
```

### 如何创建库?
- Mongodb的库是隐式创建,你可以use 一个不存在的库
- 然后在该库下创建collection,即可创建库

-   创建collection
```
db.createCollection(‘collectionName’)
```

- collection允许隐式创建 
```
Db.collectionName.insert(document);
```

- 删除collection
```
db.collectionName.drop() 
```
- 删除database
```
db.dropDatabase() 
```
### 基本操作增删改查

---

#### 增 insert

> 介绍: mongodb存储的是文档,. 文档是json格式的对象.

> 语法: db.collectionName.isnert(document);

- 增加单篇文档 
```
- Db.collectionName.insert({title:’nice day’});
```
- 增加单个文档,并指定_id 
```
 Db.collectionName.insert({_id:8,age:78,name:’lisi’});
```
- 增加多个文档

```
db.collectionName.insert(
[
{time:'friday',study:'mongodb'},
{_id:9,gender:'male',name:'QQ'}
]
)
```

---
##### 删:remove
> 语法: db.collection.remove(查询表达式, 选项);
> 选项是指  {justOne:true/false},是否只删一行, 默认为false

==注意==


-  查询表达式依然是个json对象
- 查询表达式匹配的行,将被删掉.
- 如果不写查询表达式,collections中的所有文档将被删掉.

==示例==
- [x] 删除stu表中 sn属性值为’001’的文档 
```
db.stu.remove({sn:’001’});
```
- [x] 删除stu表中gender属性为m的文档,只删除1行. 
```
db.stu.remove({gender:’m’,true});
```


---
#### 改  update操作
> 改谁? --- 查询表达式

> 改成什么样? -- 新值 或 赋值表达式

> 操作选项 ----- 可选参数

- 语法: db.collection.update(查询表达式,新值,选项);

==例:==
```
db.news.update({name:'QQ'},{name:'MSN'});
```
> 是指选中news表中,name值为QQ的文档,并把其文档值改为{name:’MSN’},
结果: 文档中的其他列也不见了,改后只有_id和name列了.
即--新文档直接替换了旧文档,而不是修改

> 如果是想修改文档的某列,可以用$set关键字
```
db.collectionName.update(query,{$set:{name:’QQ’}})
```
==修改时的赋值表达式==

- $set  修改某列的值
- $unset 删除某个列
- $rename 重命名某个列
- $inc 增长某个列
- $setOnInsert 当upsert为true时,并且发生了insert操作时,可以补充的字段.


> Option的作用:
```
{upsert:true/false,multi:true/false}
```
- Upsert---是指没有匹配的行,则直接插入该行.(和mysql中的replace一样)


- 如果有name=’wuyong’的文档,将被修改,如果没有,将添加此新文档
```
db.stu.update({name:'wuyong'},{$set:{name:'junshiwuyong'}},{upsert:true});
```

- 没有_id=99的文档被修改,因此直接插入该文档
```
db.news.update({_id:99},{x:123,y:234},{upsert:true});
```
- multi: 是指修改多行(即使查询表达式命中多行,默认也只改1行,如果想改多行,可以用此选项)

```
db.news.update({age:21},{$set:{age:22}},{multi:true});
```



---
#### 查: find, findOne
> 语法: db.collection.find(查询表达式,查询的列);
```
Db.collections.find(表达式,{列1:1,列2:1});
```

- 例1:查询所有文档 所有内容
```
db.stu.find()
```
- 例2: 查询所有文档,的gender属性 (_id属性默认总是查出来)
```
db.stu.find({},{gendre:1})
```
- 例3:查询所有文档的gender属性,且不查询_id属性
```
 db.stu.find({},{gender:1, _id:0})
```

- 例4: 查询所有gender属性值为male的文档中的name属性
```
db.stu.find({gender:’male’},{name:1,_id:0});
```










>查询表达式:




方式 | 作用 | 示例
---|---|---
最简单的查询表达式 | 查询field列的值为value的文档 |{filed:value}
$ne  | 查filed列的值 不等于 value 的文档|{field:{$ne:value}} 
$nin | not in |
 $all | 是指取出 field列是一个数组,且至少包含 v1,v2值|{field:{$all:[v1,v2..]}} 
$exists  | 查询出含有field字段的文档|{field:{$exists:1}}
$nor  | 所有条件都不满足的文档为真返回|{$nor,[条件1,条件2]}
用正则表达式查询 |以”诺基亚”开头的商品 |db.goods.find({goods_name:/诺基亚.*/},{goods_name:1});
用$where表达式来查询| |db.goods.find({$where:'this.cat_id != 3 && this.cat_id != 11'});














### 启动mongodb服务

- ./bin/mongod --dbpath/path/database --logpath/path/to/log  --port 27017
- 参数解释
- dbpath 数据存储目录
- logpath 日志存储目录
- port 运行端口(默认27017)
