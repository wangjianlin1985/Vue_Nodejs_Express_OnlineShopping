<!-- 支付成功页面 -->
<style scoped>
.checkout-goods-list{
    margin-bottom: 30px;
    overflow: hidden;
}
.checkout-goods-list dt{
    padding: 9px 0;
    font-size: 12px;
    line-height: 30px;
     background: #fafafa;
     color: #8c8c8c;
}
.checkout-goods-list dt .col {
   float: left;
}
.checkout-goods-list dt .col-1{
    padding-left: 20px;
    width: 480px;
}
.checkout-goods-list dt .col-2{
    width:363px;
    text-align: center;
}
.checkout-goods-list dt .col-3{
     width:80px;
    text-align: center;
}
.checkout-goods-list dt .col-4{
    width: 300px;
    padding-right: 30px;
    text-align: right;
}
.checkout-goods-list .item{
    display: table;
    padding: 10px 0;
    color: #333;
    margin-top:60px;
}
.checkout-goods-list .item .col{
    display: table-cell;
    margin-top:60px;
}
/* .checkout-goods-list .item .item-row{
    display: table-row;
} */
.checkout-goods-list .item .col-1{
   padding-left: 20px;
}
/* .checkout-goods-list .item .col-2{
   left: 725px;
   top: 228px;
   position: absolute;
}
.checkout-goods-list .item .col-3{
   position: absolute;
   left: 928px;
   top: 228px;
}
.checkout-goods-list .item .col-4{
    color:#ff4646;
    position: absolute;
   left: 1190px;
   top: 225px;
} */
.g-info{
    width: 100px;
    margin-left: 55px;
    margin-top: -35px;
}
.g-pic{
    margin-left: -10px;
    margin-top: -37px;
}
.price{
    width: 100px;
    margin-left: 435px;
    margin-top:-15px;
}
.num{
     margin-left: 172px;
    margin-top:-15px;
}
.Price{
   background-color:#4CAF50;
	border:none;
	color:white;
	padding:5px 22px;
	text-align:center;
	text-decoration:none;
	font-size:14px;
     cursor: pointer;
     border-radius: 6px;
     margin-left: 250px;
     margin-top: -20px;
     position: absolute;
}
.postBtn{
    background-color:#4CAF50;
	border:none;
	color:white;
	padding:5px 22px;
	text-align:center;
	text-decoration:none;
	font-size:14px;
     cursor: pointer;
     border-radius: 6px;
     margin-top: 20px;
}
</style>


<template>
    <div>
      <nav-header></nav-header>
      <nav-bread>
      <span>评价中心</span>
    </nav-bread>
      <div class="container">
        <div class="page-title-normal">
          <h2 class="page-title-h2"><span>已购买商品</span></h2>
          <dl class="checkout-goods-list">
                            <dt class="clearfix">
                                <span class="col col-1">商品名称</span>
                                <span class="col col-2">购买价格</span>
                                <span class="col col-3">购买数量</span>
                                <span class="col col-4">操作</span>
                            </dt>
                            <ul>
                                <li v-for="(item,index) in this.goodList">
                            <dd class="item clearfix">
                                <div class="item-row">
                                    <div class="col col-1">
                                        <div class="g-pic">
                                            <img v-lazy="'static/' + item.productImage" alt=""  width="40" height="40" />
                                        </div>
                                        <div class="g-info">
                                             <a href="#">{{item.productName}}</a>
                                            </div>
                                    </div>
                                    <div class="col col-2"><div class="price">{{item.salePrice | currency('￥')}}元</div></div>
                                    <div class="col col-3"><div class="num">{{item.productNum}}</div></div>
                                    <div class="col col-4"><button class="Price" @click="postMes(index)">评价晒单</button></div>
                                </div>
                            </dd>
                    </li>
               </ul>
            </dl>
        </div>
      </div>
      <!-- 模态框 -->
        <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':DetailModalFlag}">
          <div class="md-modal-inner">
            <div class="md-top">
              <div class="md-title">添加评论</div>
              <button class="md-close" @click="DetailModalFlag=false">Close</button>
            </div>
          <div class="md-content">
           <div class="confirm-tips">
            <div class="error-wrap">
                  <span class="error error-show" v-show="errorTip">输入内容不能为空，请重新输入</span>
                </div>
            <textarea name="content" v-model="content" rows="6" cols="60" onpropertychange="if(this.scrollHeight>80) this.style.posHeight=this.scrollHeight+5" placeholder="在这里输入您的评论">
            </textarea>
                <el-rate
                    v-model="starLevel"
                    show-text>
                </el-rate>
                <button class="postBtn" @click="postMessage">确认提交</button>            
            </div>
           </div>
          </div>
        </div>
      <div style="margin-top:420px;"> 
      <nav-footer></nav-footer>
      </div>
    </div>
</template>

<script>
    import NavHeader from './../components/NavHeader'
    import NavFooter from './../components/NavFooter'
    import NavBread from './../components/NavBread'
    import {currency} from './../util/currency'
    import axios from 'axios'

    export default{
        data(){
            return{
                orderId:'',
                orderTotal:0,
                goodList:[],
                checkindex:0,
                DetailModalFlag:false,
                content:'',
                errorTip:false,
                productId:0,
                starLevel:null
            }
        },
        components:{
          NavHeader,
          NavFooter,
          NavBread
        },
        filters:{
          currency:currency
        },
        mounted(){
           this.init();
        },
        methods :{
            init(){
                var orderId = this.$route.params.orderId;
                console.log(orderId);
                axios.get("/users/searchByorderId", {
                    params:{
                        orderId:orderId
                    }
                }).then((res) =>{
                    console.log(res);
                    let payList = res.data.orderList;
                    var goodList = [];
                    payList.map(item =>{
                         if(item.orderId = orderId){
                             goodList.push(item.goodsList)
                         }
                    });
                    this.goodList = goodList[0];
                })
            },
            postMes(index){
                    this.checkindex = index;
                    this.DetailModalFlag = true;
                    console.log(this.checkindex);
                    this.productId = this.goodList[this.checkindex].productId;
            },
            postMessage(){
                if(!this.content){
                    this.errorTip = true;
                    return;
                }else{
                    this.errorTip = false;
                    var Content = this.content;
                    var starLevel = this.starLevel;
                    console.log(starLevel);
                    axios.post("/users/postMes", {
                    params:{
                        mes:Content,
                        starLevel:starLevel,
                        productId:this.productId
                    }
                    }).then((response) =>{
                      console.log(response);
                      if(response.data.status == "100002"){
                          alert('评论成功，多多评论可以领取店家福利哦～');
                      }else{
                          alert('出了一点小问题，请稍后重试哦～');
                      }
                    });
                }
            }
        }
    }
</script>
