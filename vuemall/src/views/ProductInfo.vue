<style scoped>
@charset "utf-8";

/*通用样式*/
*{
	   margin:0; padding:0;
}
body{
	  font-size:12px; color:#333;
	   margin:0; padding:0;
	   }
a{
	 text-decoration:none; 
	 color:#333;
	  font-size:12px;
	  }
ul,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,form,p{
	 padding:0; margin:0;
	  list-style:none;
	  }
img{ border:0px;}
.clear{
	  clear:both;
      }
      .container{
          background:#fff; 
      }
/*商品详情部分*/
.shopdetails{
	width:1200px;
	height:700px;
	margin:0 auto;
	margin-top:20px;
    position:relative;
    padding-top: 22px;
	
}
/*放大镜*/
#leftbox{
	width:400px;
	z-index:999;
	position:absolute;
}
#showbox { background:#eee;}
#showbox span {
	 background:url(../assets/1.jpeg) repeat;
	 }
#showsum { 
	left:25px; 
	margin-top:10px;
	}
#showsum span {
	 border:1px solid #ddd;
}
#showsum span.sel {
	 border:1px solid #f60;
}

.showpage {
	 width:400px; 
	 position:relative;
	 }
.showpage a { 
	display:block; width:15px; 
	border:1px solid #ddd; 
	height:60px; line-height:60px; 
	background:#eee; 
	text-align:center; 
	font-size:18px; 
	position:absolute; 
	left:0; top:-62px; 
	text-decoration:none; 
	color:#999;}
.showpage a#shownext {
	 left:auto; right:0;
	 }
.showpage a:hover {
	 background:#ccc; 
	 color:#777;}

/*中间*/

.centerbox{
	width:580px;
	height:575px;
	position:absolute;
	top:0px;
	left:420px;
	z-index:1;
}
.centerbox .imgname{
	font-size:24px;
	color:#000;
	font-weight:bold;
	width:580px;
	height:40px;
	font-family:Microsoft YaHei,arial;
	margin-bottom:10px;
}
.centerbox p,.centerbox samp{
	width:580px;
	height:33px;
	font-size:12px;
	line-height:33px;
	color:#666;
	font-family:"微软雅黑";
	padding-left:10px;
	
}
.centerbox .Aprice, .price, .youhui{
	background:rgba(232,232,232,0.5);
}
.centerbox .Aprice samp{
	font-size:14px;
	text-decoration:line-through;
	font-family:"华文仿宋";
}
.centerbox .price samp{
	color:#D00;
	font-size:20px;
	font-weight:bold;
}
.centerbox .youhui samp{
	color:#000;
	font-weight:100;
}
.centerbox .kefu{
	margin-top:10px;
	margin-left:10px;
	width:150px;
	background-image:url(../assets/kefu.jpg);
	background-position:right;
	background-repeat:no-repeat;
}
.centerbox ul{
	margin-left:10px;
	margin-top:15px;
	}
.centerbox ul li{
	float:left;
	width:50px;
	height:50px;
	margin-left:10px;
}
.centerbox .kuanshi{
	color:#666;
	font-family:"微软雅黑";
}
.centerbox .shopimg{
	width:49px;height:49px;
}
.centerbox .shopimg img{
	margin:2px;
}
.centerbox .now{
	background-color:#F90;
}
.centerbox .chima{
	width:110px;
	height:40px;
	background-image:url(../assets/junma.jpg);
	background-position:right;
	background-repeat:no-repeat;
	margin-left:10px;
	margin-top:10px;
}
.centerbox .buy{
		margin-left:30px;
		margin-top:25px;
	}
.centerbox .buy a{
	
	display:block;
	width:200px;
	height:50px;
	color:#000;
	border:1px solid #ccc;
	float:left;
	font-size:16px;
	font-weight:bold;
	font-family:Microsoft YaHei,arial;
	margin-left:10px;
	background-color:#fff;
	text-align:center;
	line-height:50px;
}
.centerbox .fenx{
	width:200px;
	margin-left:50px;
	margin-top:20px;
}
.centerbox .fuwu{
	width:500px;
	height:35px;
	margin-left:10px;
	background-image:url(../assets/fuwu.jpg);
	background-position:right;
	background-repeat:no-repeat;
	margin-top:10px;
}
.centerbox .pay{
	width:200px;
	height:35px;
	margin-left:10px;
	background-image:url(../assets/paystyle.jpg);
	background-position:right;
	background-repeat:no-repeat;
	margin-top:10px;
}
#firstbuy{
	background-color:#f00;
		color:#fff;
}
/*右边*/
.rightbox{
	width:150px;
	height:632px;
	position:absolute;
	top:0;
	right:0;
	border-left:1px solid #ccc;
}
.rightbox .name{
	height:30px;width:150px;
	color:#666;
	font-size:16px;
	line-height:30px;
	text-align:left;
	font-family:"黑体";
}
.rightbox img{
	margin-left:20px;
}
.rightbox p{
	width:150px;
	height:20px;
	font-size:14px;
	text-align:center;
	line-height:20px;
}
/*下边商品评价及其他*/	
.evaluate{
	width:1200px;
	height:2800px;
	margin:0 auto;
	position:relative;
}
.classify{
	width:198px;height:1500px;
}
.classify .shopim {
	width:198px;height:210px;
	border:1px solid #ccc;

}
.classify .shopim .name{
	height:55px;width:198px;
	background:rgba(232,232,232,0.5);
	color:#000;
	font-size:14px;
	font-weight:bold;
	line-height:55px;
	text-align:center;
	
}
.classify .shopim .name img{
	margin-left:0;
	margin-bottom:-8px;
}
.classify .shopim img{ 
	margin-left:21px;
	margin-top:15px;
}
.classify .shopim .sc{
	float:left;
	width:67px;
	height:20px;
	border:1px solid #CCC;
	margin-left:20px;
	margin-top:10px;
	text-align:center;
	line-height:20px;
	
}
.classify .shopim .sc a{
	color:#666;
}
.classify .shopfl{
	width:198px;height:400px;
	border:1px solid #ccc;
	margin-top:30px;
}
.classify .shopfl ul li{
	width:198px;
	height:40px;
}
.classify .shopfl ul{
	margin-top:15px;
}
.classify .shopfl ul li a{
	width:150px;
	height:40px;
	font-size:12px;
	font-family:"黑体";
	margin-left:20px;
	color:#666;
	line-height:40px;
}
.classify .shopfl ul li a:hover{
	color:#9F3;
	font-size:16px;
}
.classify .shopfl .name{
	height:40px;width:198px;
	background:rgba(232,232,232,0.5);
	color:#000;
	font-size:16px;
	font-weight:bold;
	line-height:40px;
	text-align:center;
	
}
.classify .shopsee{
	width:198px;height:2500px;
	border:1px solid #ccc;
	margin-top:20px;
}
.classify .shopsee .name{
	height:40px;width:198px;
	background:rgba(232,232,232,0.5);
	color:#000;
	font-size:16px;
	font-weight:bold;
	line-height:40px;
	text-align:center;
	
}
.classify .shopsee a{
	width:170px;margin:0;
	margin-top:10px;
	margin-left:14px;
	border:0;
	
}
.classify .shopsee img{
	margin-top:10px;
}

.classify .shopsee .ex01 p{
	margin-top:0;
	width:170px;height:20px;
	margin-left:14px;
	line-height:20px;
	font-size:14px;
}

.search{
	 width:168px; height:22px;
	 background:url(../assets/1.jpeg) no-repeat;
	margin:15px 15px;
	 float:left;
	 display:inline;
	
		 }
.search .left{
	width:92px; height:22px;
	line-height:31px; 
	background:url(../assets/1.jpeg) no-repeat;
	border:none; 
	float:left; 

	}
.search .right{ 
	width:68px; height:22px; 
	float:left; 
	background:url(../assets/1.jpeg) no-repeat;
	border:none;
	}
/*tab部分*/
.tabbedPanels {
	position:absolute;
	top:0;
	right:0;
	width: 980px;
	margin:10px auto;
	border:1px soild #000;
}

.tabbedPanels .tabs{
	width:950px;
	height:50px;
	border-bottom:2px solid #000;
	margin-bottom:20px;
}
.tabbedPanels .tabs li{
	float:left;
}
.tabbedPanels .tabs li a{
	width:100px;
	height:40px;
	margin-bottom:10px;
	font-size:16px;
	font-weight:bold;
	margin-left:50px;
	text-decoration:none;
	color:#000;
	line-height:40px;
	text-align:center;
}

.tabs li a.active{
	border-bottom:3px solid #F30;
		
	}
.panelContainer{
	width:950px;
	margin:0 auto;
	margin-top:10px;
}
.panel .sell{
	font-weight:bold;
	font-size:20px;
	color:#000;
	text-decoration:none;}
.panel p{
	margin-bottom:20px;
}
.panel img{
	margin-left:10px;
}
.panel .judge{
	font-size:14px;
	font-weight:bold;
	color:#000;
	
}
.panel .judge span{
	font-size:14px;
	margin-left:15px;
}
.panel .judge01{
	height:200px;
	position:relative;
}
.panel .judge01 .idimg{
	width:80px;
	}
.panel .judge01 .write{
	position:absolute;
	top:20px;
	left:80px;
}
.panel .judge01 .write .which{
	color:#666;
	font-size:12px;
}

.panel .com{ 
	width:720px;
	 }
.panel .com .ex01{
	width:218px;
	margin-left:10px;
	margin-right:10px;
	margin-top:30px;
	border:solid 1px #c4c4c4;
	float:left;
	}
.panel .com figure{
		width:218px;
		margin-left:3px;
		margin-top:3px;
		position:relative;
	}
.panel .com img{
	margin:0;
}
.panel .com figcaption{
		position:absolute;
		bottom:3px;
		width:212px;
		height:40px;
		background:rgba(0,0,0,0.4);
		line-height:40px;
		text-align:center;
		font-size:12px;
		color:#fff;
	}
.panel .com a:hover figure figcaption{
		display:block;
		width:212px;
		height:193px;
		line-height:193px;
		text-align:center;
		font-size:12px;
		color:#fff;
	}

.panel .ex01 p{
	 height:40px; 
	 line-height:40px; 
	 text-align:center; 
	font-size:13px; 
	margin-bottom:0;
	text-decoration:none;
	color:#836e5d;
	}
.panel .ex01 .bottom{ 
	height:20px; 
	line-height:20px;
	margin-bottom:5px;
	margin-top:0;
	}
.panel .ex01 .bottom samp{
	 width:146px; 
	text-align:left; 
	padding-left:10px; 
	color:#5d9b1e; 
	font-size:12px; 
	float:left;
	}
.panel .ex01 .bottom input{
	 width:50px; height:20px; 
	background:#78ab00; 
	color:#fff; 
	float:left; 
	margin-left:0px; 
	border:none; 
	text-align:center;
	}



/* bottom_页脚部分*/
.backf{
	margin-top:20px;
	border-top:1px solid #ccc;
}
#footer{
	width:1200px;
	margin:0 auto;

	
	
}
#footer ul{
	float:left;
	margin-left:30px;
	
	width:200px;
	text-decoration:none;
	
}
#footer .sy{
	text-align:center;
	font-size:16px;
	color:#333;
	font-weight:bold;
}
#footer ul li{
	width:180px;
	padding:5px;
}
#footer ul li a,#footer ul li a:visited{
	font-size:12px;
	color:#000;
	margin-left:60px;
	text-decoration:none;
	
}
#footer ul li a:hover{
	color:#F36;
}	
.foot{
	border-top:1px solid #333;
	background:#000;
	padding:10px;
}

.foot p{
	width: 1200px;
	color: #f0f0f0;
	margin:0 auto;
	line-height:1.5em;
	text-align:center;
}
</style>


<template>
    <div>
      <nav-header></nav-header>
      <nav-bread>
      <span>商品详情</span>
    </nav-bread>
      <div class="container">
       <!-----商品详情部分------->
<div class="shopdetails">
    <!----中间----->
       <img :src="image" width="400" height="550" />
    <div class="centerbox">
    	<p class="imgname">{{this.good.productName}}</p>
    	<p class="Aprice">价格：<samp>￥{{this.Oprice}}</samp></p>
    	<p class="price">促销价：<samp>￥{{this.good.salePrice}}</samp></p>
    	<p class="youhui">店铺优惠：<samp>购物满两件打八折</samp></p>
    	<p class="kefu">客服：</p>
        <div class="clear"></div>
        <p class="chima">尺寸：</p>
        <p class="buy"><a href="javascript:void(0);" id="firstbuy" @click="buy">立即购买</a><a href="javascript:void(0);" @click="addCart(productId)">加入购物车</a></p>
   		<div class="clear"></div>
        <div class="fenx"><a href="#"><img src="../assets/xihuan.jpg"></a></div>
        <p class="fuwu">服务承诺：</p>
        <p class="pay">支付方式：</p>
    </div>
 
	<!-----右边------->
   <div class="rightbox">
    	<p class="name">——热卖商品</p>
    	<img src="/static/1.jpg" width="150" height="150">
		<p>￥5800.00元</p>
     
    	<img src="/static/10.jpg" width="150" height="150">
		<p>￥7800.00元</p>
        
        
    	<img src="/static/15.jpg" width="150" height="150">
		<p>￥5348.00元</p>
    </div>
            
</div>
<!-----商品详情部分结束------->
<!-----商品详情评价部分-------> 
<div class="evaluate">

	<div class="classify">
    	<div class="shopim">
        	<p class="name">涛涛Air Jordan 专卖店<img src="../assets/shop_icon.png" width="22" height="22"></p>
       		 <img src="../assets/des.png">
       		 <p class="sc"><a href="javascript:void(0);">收藏店铺</a></p>
             <p class="sc"><a href="javascript:void(0);">进入店铺</a></p>
        </div>
        <div class="shopsee">
        	<p class="name">新品上架</p>
        	<a href="javascript:void(0);" class="ex01">
				<img src="/static/1.jpg" width="170" height="170">
				<p>AJ 经典款 6</p>
				<p>商城价:7200.00元</p>
			</a>
			<a href="javascript:void(0);" class="ex01">
				<img src="/static/2.jpg" width="170" height="170">
				<p>Air Jordan 4</p>
				<p>商城价:￥4200.00元</p>
			</a>
            <a href="javascript:void(0);" class="ex01">
				<img src="/static/6.jpg" width="170" height="170">
				<p>Air Jordan 4</p>
				<p>商城价:￥4500.00元</p>
			</a>
            <a href="javascript:void(0);" class="ex01">
				<img src="/static/8.jpg" width="170" height="170">
				<p>Air Jordan 4</p>
				<p>商城价:￥4580.00元</p>
			</a>
			<a href="javascript:void(0);" class="ex01">
				<img src="/static/9.jpg" width="170" height="170">
				<p>Air Jordan 4</p>
				<p>商城价:￥17800.00元</p>
			</a>
            <a href="javascript:void(0);" class="ex01">
				<img src="/static/11.jpg" width="170" height="170">
				<p>Air Jordan 4</p>
				<p>商城价:￥6800.00元</p>
			</a>
            <a href="javascript:void(0);" class="ex01">
				<img src="/static/13.jpg" width="170" height="170">
				<p>Air Jordan 4</p>
				<p>商城价:￥2580.00元</p>
			</a>
            <a href="javascript:void(0);" class="ex01">
				<img src="/static/14.jpg" width="170" height="170">
				<p>Air Jordan 4</p>
				<p>商城价:￥8580.00元</p>
			</a>
            <a href="javascript:void(0);" class="ex01">
				<img src="/static/15.jpg" width="170" height="170">
				<p>Air Jordan 4</p>
				<p>商城价:￥10800.00元</p>
			</a>
            <a href="javascript:void(0);" class="ex01">
				<img src="/static/note.jpg" width="170" height="170">
				<p>Air Jordan 4</p>
				<p>商城价:￥6800.00元</p>
			</a>
        </div>
    </div>
    <div class="tabbedPanels">
    	<ul class="tabs">
        	<li><a href="javascript:void(0);" v-bind:class="{active: num == 1}" v-on:click="change(1)">商品详情</a></li>
            <li><a href="javascript:void(0);" v-bind:class="{active: num==2}" v-on:click="change(2)" >累计评价</a></li>
        </ul>
        
     <div class="panelContainer">
       	<div class="panel" v-show="num == 1">
        	<p class="sell">商品描述</p>
            <p>
                {{this.good.productDesc}}
            </p>
            <p></p>
            <!--
            <p class="sell">整体款式</p>
            <img src="/static/dec1.jpg">
            <img src="/static/dec2.jpg"> -->
        	<div class="clear"></div>
        </div>
        
        <div class="panel" v-show="num == 2">
        	<p class="sell">买家评价</p>
        	<img src="../assets/user_mes.png">
            <p class="judge">全部评价({{count}})<span>晒图({{count}})</span></p>
           <ul v-if="this.mesList.length>0">
             <li v-for="item in mesList">
               <div class="judge01">
                   <div class="idimg"><img src="../assets/user_ava.png"></div>
                    <div class="write">
                    <p class="idname">{{item.userName}} &#12288;&#12288;&#12288;&#12288;&#12288;&#12288;{{item.create_time}}
                        <el-rate
                            v-model="item.starLevel"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}" style="margin-top:10px;">
                            </el-rate>
                    </p>
                    <p>{{item.mes_content}}</p>
                    <p class="which">产品：{{productName}}</p> 
                    <img src="/static/13.jpg" width="40px" height="40px">
                    <img src="/static/13.jpg" width="40px" height="40px">
                    <img src="/static/13.jpg" width="40px" height="40px">
                   </div>
                 </div>
                </li>
               </ul>
               <ul v-else>
                 <img src="../assets/no_mes.jpg"  />
               </ul>
              <div class="clear"></div>
        </div>
         </div>
    </div>
</div>
<!-----商品详情评价部结束分-------> 
      </div>
      <nav-footer></nav-footer>
       <!-- 模态框 -->
    <modal v-bind:mdShow="mdShowCart" v-on:close="closeModal">
      <p slot="message">
        <svg class="icon-status-ok">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok"></use>
        </svg>
        <span>加入购物车成功</span>
      </p>
      <div slot="btnGroup">
        <a class="btn btn--m" href="javascript:;" @click="mdShowCart = false">继续购物</a>
        <router-link class="btn btn--m btn--red" href="javascript:;" to="/cart">查看购物车</router-link>
      </div>
    </modal>
    </div>
</template>

<script>
    import NavHeader from './../components/NavHeader'
    import NavFooter from './../components/NavFooter'
    import NavBread from './../components/NavBread'
    import {currency} from './../util/currency'
    import Modal from './../components/Modal'
    import axios from 'axios'

    export default{
        data(){
            return{
                orderId:'',
                orderTotal:0,
                num: 1,
                good:[],
                Oprice:'',
                image:'',
                productId:0,
                mdShow:false,
                mdShowCart:false,
                mesList:[],
                productName:'',
                count:0
            }
        },
        components:{
          NavHeader,
          NavFooter,
          NavBread,
          Modal
        },
        filters:{
          currency:currency
        },
        mounted(){
            this.init();
        },
        methods :{
          change(index) {
                this.num = index
              },
          init(){
                  
                  this.productId = this.$route.params.productId;
                  var param = {
                      productId:this.productId
                  };
                //   this.good = goods;
                //   this.Oprice = this.good.salePrice + 3000;
                //   this.image = '/static'+ '/' + this.good.productImage;
                //   this.productId = this.good.productId;
                //   console.log(this.good.productId);
                axios.post("/goods/searchProduct",{
                      params:param
                }).then((res)=>{
                    console.log(res);
                    let data = res.data.result;
                    this.good = data;
                    this.Oprice = this.good.salePrice + 3000;
                    this.productName = this.good.productName;
                    this.image = '/static'+ '/' + this.good.productImage;
                });
                axios.post("/goods/getUsermes", {
                     params:param
                }).then((res) =>{
                    console.log(res);
                    let respon = res.data.res;
                    this.mesList = respon;
                     this.count = respon.length;
                });
              },
          addCart(productId){
              axios.post("/goods/addCart",{
              productId:productId
             }).then((res)=>{
            var res = res.data;
            if(res.status==0){
                this.mdShowCart = true;
                this.$store.commit("updateCartCount",1);
            }else{
                this.mdShow = true;
            }
        });
    },
        closeModal(){
          this.mdShow = false;
          this.mdShowCart = false;
        },
        buy(){
           this.addCart(this.productId);
           this.$router.push({
                    path:"/cart"
                });
         }
        }
    }
</script>
