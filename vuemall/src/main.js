// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import VueLazyload from 'vue-lazyload'
import infiniteScroll from  'vue-infinite-scroll'
import {currency} from './util/currency'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './assets/css/base.css'
import './assets/css/checkout.css'
import './assets/css/product.css'

Vue.use(infiniteScroll);
Vue.use(Vuex);
Vue.use(ElementUI);

Vue.use(VueLazyload, {
  loading: 'static/loading-svg/loading-bars.svg',
  try: 3 // default 1
})

Vue.filter("currency",currency);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    nickName:'',
    cartCount:0,
    Token:window.sessionStorage.getItem('Token')
  },
  mutations: {
    //更新用户信息
    updateUserInfo(state, nickName) {
      state.nickName = nickName;
    },
    updateCartCount(state,cartCount){
      state.cartCount += cartCount;
    },
    updateToken(state, Token){
      state.Token = Token;
      window.sessionStorage.setItem('Token',Token);
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  mounted(){
    this.checkLogin();
    this.checkAuth();
    this.getCartCount();
  },
  methods:{
    checkLogin(){
      axios.get("users/checkLogin").then(res=> {
        var res = res.data;
        if (res.status == "0") {
          this.$store.commit("updateUserInfo", res.result);
        }else{
          if(this.$route.path!="/goods"){
            this.$router.push("/goods");
          }
        }
      });
    },
    getCartCount(){
      axios.get("users/getCartCount").then(res=>{
        var res = res.data;
        if(res.status=="0"){
          this.$store.commit("updateCartCount",res.result);
        }
      });
    },
    checkAuth(){
      router.beforeEach((to, from, next) => {
        if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
          // chrome
           document.body.scrollTop = 0
            // firefox
           document.documentElement.scrollTop = 0
           // safari
           window.pageYOffset = 0
          console.log(store.state.Token);
          console.log(store.state.nickName);
            if (store.state.Token || store.state.Token !== null) {  // 通过vuex state获取当前的token是否存在
                next();
            }
            else {
                next({
                    path: '/adminLogin',
                    query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
                })
            }
        }
        else {
          console.log('>>>',store.state.Token);
           // chrome
           document.body.scrollTop = 0
            // firefox
           document.documentElement.scrollTop = 0
           // safari
           window.pageYOffset = 0
            next();
        }
     });
    }
  },
  template: '<App/>',
  //render: h => h(App),
  components: { App }
});//.$mount('#app')
