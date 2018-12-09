/*
*
*@author xueyushuai
*/
var mongoose =require('mongoose');
var dbconfig =require('../dbConfig');
var db = mongoose.connect(dbconfig.url,dbconfig.options);
db.then(function () {
    console.log('数据库连接成功')
}).catch(function (error) {
    console.log('数据连接失败'+error)
});
var ToDo =mongoose.model('todo_information',new mongoose.Schema({
    name:String,
    createTime:{type:Date,default:Date.now()},
    isDo:{type:Boolean,default:true}
}));
exports.ToDo=ToDo;