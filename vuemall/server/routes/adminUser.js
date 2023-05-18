var express = require('express');
var router = express.Router();
require('./../util/util')
var User = require('./../models/user');
var Goods = require('../models/goods');
var Admin = require('../models/admin');

//管理员登录
router.post('/Login', function(req,res,next) {
    var param = {
        userName:req.body.userName,
        userPwd:req.body.userPwd
    }
    console.log("用户名：" + param.userName);
    console.log("密码：" + param.userPwd);

    Admin.findOne(param, function(err,doc) {
        if(err){
            res.json({
                status:"10000",
                mes:'发生错误'
            });
        }else{
            doc = {};
            doc.userName = param.userName;
            if(doc){
                res.cookie("userName",doc.userName,{
                    maxAge:1000*60*60
                  });
                 function randomString(len) {
                    len = len || 32;
                    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
                    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789';    
                    var maxLen = $chars.length;
                    var str = '';
                    for (var i = 0; i < len; i++) {
                        str += $chars.charAt(Math.floor(Math.random() * maxLen));
                    }
                    return str;
                }
                      let token = randomString(20);
                  console.log(req.cookies.userName);
                res.send({
                    status:"10001",
                    mes:'查询成功',
                    result:{
                        userName:doc.userName,
                        token:token
                    }
                });  
            }else{
                res.send({
                    status:"10002",
                    mes:'查询失败'
                });
            }
        }
    });
});

router.post("/Logout", function (req,res,next) {
    // 清除 cookie
    res.cookie("userName","",{
      path:"/",
      maxAge:-1
    });
    res.json({
      status:"0",
      msg:'',
      result:{
          token:''
      }
    })
  });

router.post('/searchPass', function(req,res,next){
     var Pass = req.body.data;
     var userName = req.cookies.userName;
     Admin.update({userName:userName},
        {
            $set:{
                userPwd:Pass
            },
           }, function(err,doc){
         if(err){
            res.send({
                status:"10002",
                mes:'失败'
            });
         }else{
             if(doc){
                res.send({
                    status:"1000",
                    mes:'修改成功',
                });
             }else{
                res.send({
                    status:"1",
                    mes:'查询失败'
                });
             }
         }
     })
});


router.post('/findAllUser', function(req,res,next){
    User.find(function(err,uoc){
        if(err){
            res.send({
                status:"",
                mes:''
            });
        }else{
            if(uoc){
                res.send({
                    status:"11",
                    mes:'查询成功',
                    result:uoc
                });
            }else{
                res.send({
                    status:"00",
                    mes:'查询失败'
                });
            }
        }
    });
});

router.post('/AllProduct', function(req,res,next) {
    Goods.find(function(err,doc){
         if(err){
            res.send({
                status:"10002",
                mes:'查询失败'
            });
         }else{
             if(doc){
                // console.log(doc);
                res.send({
                    status:"10001",
                    mes:'查询成功',
                    res:doc
                });
             }else{
                res.send({
                    status:"10000",
                    mes:'查询失败'
                });
             }
         }
    });
});

router.post('/updateProduct', function(req,res,next){
    var obj = req.body.params;
    console.log("商品描述：" + obj.productDesc);
   Goods.update({productId:obj.productId},{
     $set:{
         productName:obj.productName,
         productImage:obj.productImage,
         salePrice:obj.salePrice,
         productDesc: obj.productDesc,
     },
    },function(err,doc){
         if(err){
            res.send({
                status:"101",
                mes:'发生错误'
            });
         }else{
            if(doc){
                res.send({
                    status:"100",
                    mes:'修改成功'
                });
            }else{
                res.send({
                    status:"102",
                    mes:'修改失败'
                });
            }
         }
    })
}); 

router.post('/updateUser', function(req,res,next){
    var obj = req.body.params;

   User.update({_id:obj._id},{
     $set:{
         userName:obj.userName,
         userPwd:obj.userPwd
     },
    },function(err,doc){
         if(err){
            res.send({
                status:"101",
                mes:'发生错误'
            });
         }else{
            if(doc){
                res.send({
                    status:"1000",
                    mes:'修改成功'
                });
            }else{
                res.send({
                    status:"102",
                    mes:'修改失败'
                });
            }
         }
    })
}); 

router.post('/deletProduct', function(req,res,next){
      var productId = req.body.data;
      console.log(productId);
       Goods.remove({productId:productId}, function(err,doc){
           if(err){
            res.send({
                status:"1001",
                mes:'发生错误'
            });
           }else{
               if(doc){
                res.send({
                    status:"1000",
                    mes:'删除成功'
                });
               }else{
                res.send({
                    status:"1002",
                    mes:'删除失败'
                });
               }
           }
       })
});


router.post('/deletUser', function(req,res,next){
    var user = req.body.params.userName;
     User.remove({userName:user}, function(err,doc){
         if(err){
          res.send({
              status:"1001",
              mes:'发生错误'
          });
         }else{
             if(doc){
              res.send({
                  status:"1000",
                  mes:'删除成功'
              });
             }else{
              res.send({
                  status:"1002",
                  mes:'删除失败'
              });
             }
         }
     })
});

router.post('/addProduct', function(req,res,next){
    var param = req.body.param;

    Goods.findOne({productId:param.productId}, function(err,docx){
        if(err){
            res.send({
                status:"10001",
                mes:'发生错误'
            });
        }else{
            if(docx !== null){
                res.send({
                    status:"10002",
                    mes:'该商品ID已经存在'
                });
            }else{
                let newGood = new Goods({
                    productId:param.productId,
                    productName:param.productName,
                    salePrice:param.salePrice,
                    productImage:param.productImage
                });
                newGood.save((err,uoc) => {
                     if(err){
                        res.send({
                            status:"100011",
                            mes:'发生错误'
                        });
                     }else{
                         if(uoc){
                        res.send({
                            status:"10000",
                            mes:'增加商品成功'
                        });
                       }else{
                        res.send({
                            status:"10003",
                            mes:'增加商品失败'
                          });
                        }
                     }
                })
            }
        }
    })
});


router.post('/findAllUser', function(req,res,next){
     
    User.find(function(err,doc){
        if(err){
            res.send({
                status:"1",
                mes:'发生错误'
              });
        }else{
            if(doc){
                res.send({
                    status:"0",
                    mes:'查询成功',
                    result:doc
                  });
            }else{
                res.send({
                    status:"2",
                    mes:'查询失败'
                  });
            }
        }
    })
});


router.post('/findOrderList', function(req,res,next){
    var userName = req.body.params;
    User.findOne({userName:userName},function(err,doc){
        if(err){
            res.send({
                status:"01",
                mes:'发生错误'
              });
        }else{
            if(doc){
                //console.log("订单列表：",doc.orderList[0].goodsList);
                for(var i=0;i<doc.orderList.length;i++) {
                    var productInfo = '';
                    var order = doc.orderList[i];
                    var goodsList = order.goodsList;
                    for(var j=0;j<goodsList.length;j++) {
                        var goodInfo = goodsList[j];
                        productInfo += goodInfo.productName + "[数量: " + goodInfo.productNum + "], ";
                    }
                    doc.orderList[i].productInfo = productInfo;
                }

                res.send({
                    status:"00",
                    mes:'查询成功',
                    result:doc.orderList
                  });
            }else{
                res.send({
                    status:"02",
                    mes:'查询失败'
                  });
            }
        }
    });
});

router.post('/findAddressList', function(req,res,next){
    var userName = req.body.params;
    User.findOne({userName:userName},function(err,doc){
        if(err){
            res.send({
                status:"01",
                mes:'发生错误'
              });
        }else{
            if(doc){
                res.send({
                    status:"00",
                    mes:'查询成功',
                    result:doc.addressList
                  });
            }else{
                res.send({
                    status:"02",
                    mes:'查询失败'
                  });
            }
        }
    });
});

router.post('/updateAddress', function(req,res,next){
    var user = req.body.param.user;
    var id = req.body.param.id;
    var userName = req.body.param.userName;
    var streetName = req.body.param.streetName;
    var tel = req.body.param.tel;
    var isDefault = req.body.param.isDefault;

    User.findOne({userName:user}, function(err,uoc){
        if(err){
            res.send({
                status:"01",
                mes:'发生错误'
              });
        }else{
            if(uoc){
                uoc.addressList.forEach((item)=>{
                    if(item._id == id){
                        item.userName = userName;
                        item.streetName = streetName;
                        item.tel = tel;
                        item.isDefault = isDefault;
                    }
                  })
                console.log('>>>>>>>>>',uoc.orderList[0].orderStatus);
                uoc.markModified('addressList');
                uoc.save(function(err1,uoc1){
                    if(err1){
                        res.send({
                            status:"00",
                            mes:'修改失败'
                          });
                    }else{
                        res.send({
                            status:"000",
                            mes:'修改成功'
                          });
                    }
                })
            }else{
                res.send({
                    status:"02",
                    mes:'查询失败'
                  });
            }
        }
    });
});

router.post('/deletAddress', function(req,res,next){
    var _id = req.body.params._id;
    var user = req.body.params.userName;
    console.log(_id,user);

    User.update({
        userName:user
      },{
        $pull:{
          'addressList':{
            '_id':_id
          }
        }
      }, function (err,doc) {
        if(err){
          res.json({
            status:'1',
            msg:err.message,
            result:''
          });
        }else{
          res.json({
            status:'0001',
            msg:'',
            result:'suc'
          });
        }
      });
});

router.post('/updateStatus', function(req,res,next){
    var userName = req.body.param.userName;
    var orderId = req.body.param.orderId;
    var orderStatus = req.body.param.orderStatus;
    console.log(userName);

    User.findOne({userName:userName}, function(err,uoc){
        if(err){
            res.send({
                status:"01",
                mes:'发生错误'
              });
        }else{
            if(uoc){
                uoc.orderList.forEach((item)=>{
                    if(item.orderId == orderId){
                        item.orderStatus = orderStatus;
                    }
                  })
                console.log('>>>>>>>>>',uoc.orderList[0].orderStatus);
                uoc.markModified('orderList');
                uoc.save(function(err1,uoc1){
                    if(err1){
                        res.send({
                            status:"00",
                            mes:'修改失败'
                          });
                    }else{
                        res.send({
                            status:"000",
                            mes:'修改成功'
                          });
                    }
                })
            }else{
                res.send({
                    status:"02",
                    mes:'查询失败'
                  });
            }
        }
    });
});


router.post('/deletOrder', function(req,res,next){
    var username = req.body.params.userName;
    var orderId = req.body.params.orderId; 

    User.update({
        userName:username
      },{
        $pull:{
          'orderList':{
            'orderId':orderId
          }
        }
      }, function (err,doc) {
        if(err){
          res.json({
            status:'1',
            msg:err.message,
            result:''
          });
        }else{
          res.json({
            status:'0001',
            msg:'',
            result:'suc'
          });
        }
      });
});

router.post('/findEvaList', function(req,res,next){
    var productId = req.body.productId;

    Goods.findOne({productId:productId}, function(err,doc){
            if(err){
                res.json({
                    status:'',
                    msg:'',
                    result:''
                  });
            }else{
                if(doc){
                    res.json({
                        status:'00',
                        msg:'获取成功',
                        result:doc.user_mes
                      });
                }else{
                    res.json({
                        status:'',
                        msg:'',
                        result:'获取失败'
                      });
                }
            }
    });
});


router.post('/deletEva', function(req,res,next){
    var create_time = req.body.params.create_time;
    var productId = req.body.params.productId; 

    Goods.update({
        productId:productId
      },{
        $pull:{
          'user_mes':{
            'create_time':create_time
          }
        }
      }, function (err,doc) {
        if(err){
          res.json({
            status:'1',
            msg:err.message,
            result:''
          });
        }else{
          res.json({
            status:'0001',
            msg:'',
            result:'删除成功'
          });
        }
      });
});

module.exports = router;