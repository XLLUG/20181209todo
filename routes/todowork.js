var express = require('express');
var router = express.Router();
var Model = require('../model');
var ToDo =Model.ToDo;

/* 获取待办信息 */
router.get('/', function(req, res, next) {
  ToDo.find({},function (error,data) {
     if(error){
       res.send({'success':false,"info":"查询失败"})
     }else {
         res.send({'success':true,"info":data})
     }
  });
});

router.post('/add',function (req,res,next) {
    console.log(req.body);
    var info =req.body;
    ToDo.create(info,function (error,doc) {
        if(error){
          res.send({"success":false,"info":"添加失败"})
        }else {
          res.send({"success":true,"info":doc})
        }
    })
});

module.exports = router;
