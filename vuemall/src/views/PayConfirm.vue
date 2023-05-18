<!-- 付款确认页面 -->
<style>
.payContent{
    width: 80%;
    margin-left: 125px;
    height: 450px;
    background: #ffffff;
    display: flex;
    border-bottom: 2px solid #444;
}
.goodsContent{
    font-family: 微软雅黑;
    font-size: 16px;
    color: #444;
    margin-left: 40px;
    margin-top:30px; 
}
.radio {
  position: relative;
  line-height: 30px;
}

input[type="radio"] {
  width: 20px;
  height: 20px;
  opacity: 0;
}

label {
  position: absolute;
  left: -270px;
  top: 120px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #999;
}

/*设置选中的input的样式*/
/* + 是兄弟选择器,获取选中后的label元素*/
input:checked+label {
  background-color: #006eb2;
  border: 1px solid #006eb2;
}

input:checked+label::after {
  position: absolute;
  content: "";
  width: 5px;
  height: 10px;
  top: 3px;
  left: 6px;
  border: 2px solid #fff;
  border-top: none;
  border-left: none;
  transform: rotate(45deg)
}
.total-price{
    color:#ee7a23;
}
</style>


<template>
    <div>
      <nav-header></nav-header>
      <div class="container">
        <div class="page-title-normal">
          <h2 class="page-title-h2"><span>付款 方式</span></h2>
        </div>
        <!-- 进度条 -->
        <div class="check-step">
          <ul>
            <li><span>选择地址</span></li>
            <li><span>查看订单</span></li>
            <li class="cur"><span>付款方式</span></li>
            <li><span>订单确认</span></li>
          </ul>
        </div>
        <div class="payContent">
           <img src='../assets/code.png' style="width:100px;height:100px;" />
           <span class="goodsContent">订单编号: {{orderId}}</span>
           <div class="radio">
                 <input id="item1" type="radio"  name="item" >
                 <label for="item1"></label>
                 <span style="left: -240px;top:116px;position:absolute;">中国工商银行        ****2345     储蓄卡|快捷</span>
           </div>
           <div class="next-btn-wrap">
               <button class="btn btn--m" @click="addPay" style="margin-left:-250px;margin-top:160px;">添加快捷/网银</button>
            </div>
            <div class="item-total" style="margin-left:-250px;margin-top:250px;font-size:18px;">
                支付: <span class="total-price">{{orderTotal|currency('￥')}}</span>元
             </div>
             <div class="next-btn-wrap">
               <button class="btn btn--m" @click="paySure" style="margin-left:-145px;margin-top:300px;">确认付款</button>
            </div>
            <ul style="margin-top:380px;">
                <li><img src="../assets/pay1.png"/></li>
            </ul>
        </div>

        <!-- <div class="order-create">
          <div class="order-create-pic"><img src="/static/ok-2.png" alt=""></div>
          <div class="order-create-main">
            <h3>恭喜! <br>您的订单正在处理中!</h3>
            <p>
              <span>订单 ID：{{orderId}}</span>
              <span>订单总价：{{orderTotal|currency('￥')}}</span>
            </p>
            <div class="order-create-btn-wrap">
              <div class="btn-l-wrap">
                <router-link class="btn btn--m" to="/cart">返回购物车</router-link>
              </div>
              <div class="btn-r-wrap">
                <router-link class="btn btn--m" to="/">返回首页</router-link>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <nav-footer></nav-footer>
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
        methods : {
            addPay(){
                alert('暂时不支持其他支付方式哦～');
                return;
            },
            paySure(){
                this.$router.push({
                        path:'/orderSuccess?orderId='+this.orderId
                    })
            },
            getContent(){
                this.orderId = this.$route.query.orderId;
                this.orderTotal = this.$route.query.orderTotal;
                console.log(this.orderTotal);
            }

        },
        mounted(){
             this.getContent();
        }
    }
</script>
