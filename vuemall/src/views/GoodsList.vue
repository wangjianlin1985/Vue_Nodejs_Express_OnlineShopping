<!-- 首页，商品列表页 -->
<style>
* {
   margin: 0;
   padding: 0;
   text-decoration: none;
}
#inner_slide{
  max-width: 1228px;
  width: 100%;
  height: 430px;
  margin: 0 auto;
}
#list {
   position: absolute;
   z-index: 1;
   width: 4200px;
    height: 400px;
        }
  #list:hover{
    cursor: pointer;
  }
  #list img {
            float: left;
            width: 600px;
            height: 400px;
        }
  #buttons {
            position: absolute;
            left:660px;
            top: 480px;
            z-index: 2;
            height: 10px;
            width: 100px;
        }
  #buttons span {
            float: left;
            margin-right: 5px;
            width: 10px;
            height: 10px;
            border: 1px solid #fff;
            border-radius: 50%;
            background: #333;
            cursor: pointer;
        }
  #buttons .on {
            background: orangered;
        }
  .arrow {
            position: absolute;
            top: 180px;
            z-index: 2;
            display: none;
            width: 40px;
            height: 40px;
            font-size: 36px;
            font-weight: bold;
            line-height: 39px;
            text-align: center;
            color: #fff;
            background-color: RGBA(0, 0, 0, .3);
            cursor: pointer;
        }
 .arrow:hover {
            background-color: RGBA(0, 0, 0, .7);
        }
 #container:hover .arrow {
            display: block;
        }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<template>
  <div>
    <!-- 顶部导航 -->
    <nav-header></nav-header>
    <!-- banner-->
    <el-carousel :interval="4000" type="card" height="430px">
    <el-carousel-item v-for="item in cart" :key="item.index">
      <img  :src="item.src" />
    </el-carousel-item>
  </el-carousel>
    <!-- 面包屑 -->
    <nav-bread>
      <span>商品列表</span>
    </nav-bread>
    <!-- 主要内容 -->
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">排序:</span>
          <a href="javascript:void(0)" class="default cur">默认</a>
          <a href="javascript:void(0)" class="price" v-bind:class="{'sort-up':sortFlag}" @click="sortGoods()">价格 <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
          <a href="javascript:void(0)" class="filterby stopPop" @click.stop="showFilterPop">Filter by</a>
        </div>

        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}">
            <dl class="filter-price">
              <dt>筛选:</dt>
              <dd><a href="javascript:void(0)" @click="setPriceFilter('all')" v-bind:class="{'cur':priceChecked=='all'}">全部</a></dd>
              <dd v-for="(item,index) in priceFilter">
                <a href="javascript:void(0)" @click="setPriceFilter(index)" v-bind:class="{'cur':priceChecked==index}">{{item.startPrice}} - {{item.endPrice}}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(item,index) in goodsList" :key="item.productId">
                  <div class="pic">
                    <a href="javascript:void(0)"><img v-lazy="'static/' + item.productImage" alt="" v-on:click="showDetail(index)"></a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.salePrice | currency('￥')}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <!-- 滚动插件 -->
            <div class="view-more-normal"
                 v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
              <img src="./../assets/loading-spinning-bubbles.svg" v-show="loading">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 模态框 -->
    <modal v-bind:mdShow="mdShow" v-on:close="closeModal">
        <p slot="message">
           您还没有登录，请先登录后再操作！
        </p>
        <div slot="btnGroup">
            <a class="btn btn--m" href="javascript:;" @click="mdShow = false">返回登录</a>
        </div>
    </modal>

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

    <div class="md-overlay" v-show="overLayFlag" @click.stop="closePop"></div>

    <!-- 尾部说明 -->
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from './../components/NavHeader'
import NavFooter from './../components/NavFooter'
import NavBread from './../components/NavBread'
import Modal from './../components/Modal'
import axios from 'axios'

export default{
  data(){
      return {
        // 商品信息
        goodsList:[],
        goods:[],
        cart:[{src:require("../assets/10.jpeg")},{src:require("../assets/2.jpeg")},{src:require("../assets/7.jpeg")},{src:require("../assets/8.jpeg")},{src:require("../assets/9.jpeg")},{src:require("../assets/5.jpeg")}],
        // 排序方式
        sortFlag:true,
        // 分页
        page:1,
        pageSize:8,
        checkIndex:0,
        busy:true,
        loading:false,
        mdShow:false,
        mdShowCart:false,
        // 按价格过滤
        priceFilter:[
          {
            startPrice:'Air Jordan系列1',
            endPrice:'12'
          },
          {
            startPrice:'AJ经典款1',
            endPrice:'10'
          },
          {
            startPrice:'AJ联名Supreme系列（1）',
            endPrice:'（8）'
          },
          {
            startPrice:'AJ空军一号联名NBA款(Lakes)',
            endPrice:'(Rocket)'
          }
        ],
        // 当前选中哪个价格过滤区间
        priceChecked:'all',
        // 按价格排序
        filterBy:false,
        // 按价格排序遮罩层
        overLayFlag:false
      }
  },
  mounted(){
      this.getGoodsList();
  },
  components:{
    NavHeader,
    NavFooter,
    NavBread,
    Modal
  },
  methods:{
    // mock
    // getGoodsList () {
    //   axios.get('./goods').then((res) => {
    //     this.goodsList = res.data.result
    //   })
    // },
    // 获取商品信息
    getGoodsList(flag){
      var param = {
          page:this.page,
          pageSize:this.pageSize,
          sort:this.sortFlag?1:-1,
          priceLevel:this.priceChecked
      };
      
      this.loading = true;

      axios.get("/goods/list",{
        params: param
      }).then((response)=>{
        var res = response.data;
        this.loading = false;
        if(res.status=="0"){
          if(flag){
            console.log(flag);
              this.goodsList = this.goodsList.concat(res.result.list);
              console.log('goods:',this.goodsList);
              if(res.result.count==0){
                  this.busy = true;
              }else{
                  this.busy = false;
              }
          }else{
              this.goodsList = res.result.list;
              this.busy = false;
          }
        }else{
          this.goodsList = [];
        }
      });
    },
    sortGoods(){
        this.sortFlag = !this.sortFlag;
        this.page = 1;
        this.getGoodsList();
    },
    setPriceFilter(index){
      this.priceChecked = index;
      this.page = 1;
      this.getGoodsList();
    },
    loadMore(){
        this.busy = true;
        setTimeout(() => {
          this.page++;
          this.getGoodsList(true);
        }, 500);
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
    // 显示按价格排序
    showFilterPop(){
      this.filterBy=true;
      this.overLayFlag=true;
    },
    // 隐藏按价格排序
    closePop(){
      this.filterBy=false;
      this.overLayFlag=false;
      this.mdShowCart = false;
    },
     showDetail(index){
            this.checkIndex = index;
            this.goods = this.goodsList[this.checkIndex];
            console.log(this.checkIndex);
            this.$router.push({name: 'ProductInfo', params: {productId: this.goodsList[this.checkIndex].productId}})
        }
  }
}
</script>
