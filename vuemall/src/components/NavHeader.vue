<template>
    <header class="header">
      <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <symbol id="icon-arrow-short" viewBox="0 0 25 32">
            <title>arrow-short</title>
            <path class="path1" d="M24.487 18.922l-1.948-1.948-8.904 8.904v-25.878h-2.783v25.878l-8.904-8.904-1.948 1.948 12.243 12.243z"></path>
          </symbol>
          <symbol id="icon-status-ok" viewBox="0 0 32 32">
            <title>status-ok</title>
            <path class="path1" d="M22.361 10.903l-9.71 9.063-2.998-2.998c-0.208-0.209-0.546-0.209-0.754 0s-0.208 0.546 0 0.754l3.363 3.363c0.104 0.104 0.241 0.156 0.377 0.156 0.131 0 0.261-0.048 0.364-0.143l10.087-9.414c0.215-0.201 0.227-0.539 0.026-0.754s-0.539-0.226-0.754-0.026z"></path>
            <path class="path2" d="M16 30.933c-8.234 0-14.933-6.699-14.933-14.933s6.699-14.933 14.933-14.933c8.234 0 14.933 6.699 14.933 14.933s-6.699 14.933-14.933 14.933zM16 0c-8.822 0-16 7.178-16 16 0 8.823 7.178 16 16 16s16-7.177 16-16c0-8.822-7.178-16-16-16z"></path>
          </symbol>
          <symbol id="icon-cart" viewBox="0 0 38 32">
            <title>cart</title>
            <path class="path1" d="M37.759 0h-4.133c-0.733 0.004-1.337 0.549-1.434 1.255l-0.546 4.342c-0.081 0.484-0.496 0.849-0.997 0.849-0.005 0-0.009-0-0.014-0h-27.604c-0.003 0-0.007-0-0.011-0-1.674 0-3.031 1.357-3.031 3.031 0 0.34 0.056 0.666 0.159 0.971l2.52 8.062c0.385 1.194 1.486 2.043 2.785 2.043 0.126 0 0.25-0.008 0.372-0.023l22.983 0.002c0.515 0.131 0.626 0.768 0.626 1.283 0.005 0.044 0.009 0.095 0.009 0.146 0 0.501-0.294 0.933-0.718 1.134l-22.439 0.003c-0.354 0-0.642 0.287-0.642 0.642s0.287 0.642 0.642 0.642h22.745l0.131-0.071c0.919-0.392 1.551-1.287 1.551-2.33 0-0.058-0.002-0.116-0.006-0.173 0.021-0.108 0.033-0.24 0.033-0.376 0-1.072-0.732-1.973-1.724-2.23l-23.357-0.004c-0.063 0.008-0.135 0.013-0.209 0.013-0.719 0-1.332-0.455-1.566-1.093l-2.53-8.095c-0.048-0.154-0.076-0.332-0.076-0.515 0-0.973 0.782-1.764 1.752-1.778h27.657c1.159-0.004 2.112-0.883 2.232-2.011l0.547-4.345c0.010-0.083 0.078-0.147 0.161-0.152l4.133-0c0.354 0 0.642-0.287 0.642-0.642s-0.287-0.642-0.642-0.642z"></path>
            <path class="path2" d="M31.323 9.69c-0.022-0.003-0.048-0.004-0.074-0.004-0.328 0-0.598 0.248-0.633 0.567l-0.809 7.268c-0.003 0.022-0.004 0.048-0.004 0.074 0 0.328 0.248 0.598 0.567 0.633l0.074 0c0.001 0 0.003 0 0.004 0 0.327 0 0.596-0.246 0.632-0.563l0.809-7.268c0.003-0.022 0.004-0.048 0.004-0.074 0-0.328-0.248-0.598-0.567-0.633z"></path>
            <path class="path3" d="M27.514 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM27.514 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
            <path class="path4" d="M9.599 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM9.599 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
          </symbol>
        </defs>
      </svg>
        <div class="navbar">
            <div class="navbar-left-container">
              <h1><a class="logo" href="/" title="首页">涛涛商城</a></h1>
              <!-- <a href="/" class="logo">
                <img class="navbar-brand-logo" src="../assets/mi-logo.png">
              </a> -->
            </div>

            <div class="navbar-right-container" style="display: flex;">
              <div class="navbar-menu-container">
                <span class="navbar-link" v-text="nickName" v-if="nickName"></span>
                <a href="javascript:void(0)" class="navbar-link" @click="adminloginModalFlag=true" v-if="!nickName">商家登录</a>
                <a href="javascript:void(0)" class="navbar-link" @click="loginModalFlag=true" v-if="!nickName">登录</a>
                <a href="javascript:void(0)" class="navbar-link" @click="registModalFlag=true" v-if="!nickName">注册</a>
                <a href="javascript:void(0)" class="navbar-link" @click="logOut" v-else>注销</a>
                <a href="/#/orderContent" class="navbar-link" v-if="nickName">我的订单</a>
                <a href="/#/adminCon" class="navbar-link" v-if="Token">商户后台</a>

                <div class="navbar-cart-container">
                  <span class="navbar-cart-count" v-text="cartCount" v-if="cartCount"></span>
                  <a class="navbar-link navbar-cart-link" href="/#/cart">
                    <svg class="navbar-cart-logo">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cart"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
        </div>

        <!-- 模态框 -->
        <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':loginModalFlag}">
          <div class="md-modal-inner">
            <div class="md-top">
              <div class="md-title">登录平台～</div>
              <button class="md-close" @click="loginModalFlag=false, errorTip = false">Close</button>
            </div>

            <div class="md-content">
              <div class="confirm-tips">
                <div class="error-wrap">
                  <span class="error error-show" v-show="errorTip">用户名或者密码错误</span>
                </div>
                <ul>
                  <li class="regi_form_input">
                    <i class="icon IconPeople"></i>
                    <input type="text" tabindex="1" name="loginname" v-model="userName" class="regi_login_input regi_login_input_left" placeholder="用户名" data-type="loginname">
                  </li>
                  <li class="regi_form_input noMargin">
                    <i class="icon IconPwd"></i>
                    <input type="password" tabindex="2"  name="password" v-model="userPwd" class="regi_login_input regi_login_input_left login-input-no input_text" placeholder="密码" @keyup.enter="login">
                  </li>
                </ul>
              </div>
              <div class="login-wrap">
                <a href="javascript:;" class="btn-login" @click="login">登  录</a>
              </div>
            </div>
          </div>
        </div>
        <!-- 管理员登录模态框 -->
        <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':adminloginModalFlag}">
          <div class="md-modal-inner">
            <div class="md-top">
              <div class="md-title">登录商户平台～</div>
              <button class="md-close" @click="adminloginModalFlag=false, errorTip = false">Close</button>
            </div>

            <div class="md-content">
              <div class="confirm-tips">
                <div class="error-wrap">
                  <span class="error error-show" v-show="errorTip">商户账号名或者密码错误</span>
                </div>
                <ul>
                  <li class="regi_form_input">
                    <i class="icon IconPeople"></i>
                    <input type="text" tabindex="1" name="loginname" v-model="userName" class="regi_login_input regi_login_input_left" placeholder="商户账号" data-type="loginname">
                  </li>
                  <li class="regi_form_input noMargin">
                    <i class="icon IconPwd"></i>
                    <input type="password" tabindex="2"  name="password" v-model="userPwd" class="regi_login_input regi_login_input_left login-input-no input_text" placeholder="密码" @keyup.enter="adminLogin">
                  </li>
                </ul>
              </div>
              <div class="login-wrap">
                <a href="javascript:;" class="btn-login" @click="adminLogin">登  录</a>
              </div>
            </div>
          </div>
        </div>
     <!-- 注册 -->
        <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':registModalFlag}">
          <div class="md-modal-inner">
            <div class="md-top">
              <div class="md-title">加入我们～</div>
              <button class="md-close" @click="registModalFlag=false,errorTip = false, errorTip2 = false">Close</button>
            </div>

            <div class="md-content">
              <div class="confirm-tips">
                <div class="error-wrap">
                  <span class="error error-show" v-show="errorTip">注册用户名或者密码不能为空</span>
                </div>
                <div class="error-wrap">
                  <span class="error error-show" v-show="errorTip1">该用户名已被注册，请重新输入</span>
                </div>
                <div class="error-wrap">
                  <span class="error error-show" v-show="errorTip2">两次输入密码不一致，请重新输入</span>
                </div>
                <ul>
                  <li class="regi_form_input">
                    <i class="icon IconPeople"></i>
                    <input type="text" tabindex="1" name="registname" v-model="username" class="regi_login_input regi_login_input_left" placeholder="请输入会员名" data-type="registname">
                  </li>
                  <li class="regi_form_input noMargin">
                    <i class="icon IconPwd"></i>
                    <input type="password" tabindex="2"  name="password" v-model="userpassword" class="regi_login_input regi_login_input_left login-input-no input_text" placeholder="设置密码" @keyup.enter="regist">
                  </li>
                  <li class="regi_form_input noMargin">
                    <i class="icon IconPwd"></i>
                    <input type="password" tabindex="3"  name="password" v-model="userPassword" class="regi_login_input regi_login_input_left login-input-no input_text" placeholder="确认密码" @keyup.enter="regist">
                  </li>
                </ul>
              </div>
              <div class="login-wrap">
                <a href="javascript:;" class="btn-login" @click="regist">立即注册</a>
              </div>
            </div>
          </div>
        </div>

        <!-- 模态框遮罩层 -->
        <div class="md-overlay" v-if="loginModalFlag" @click="loginModalFlag=false"></div>
        <div class="md-overlay" v-if="adminloginModalFlag" @click="adminloginModalFlag=false"></div>
        <div class="md-overlay" v-if="registModalFlag" @click="registModalFlag=false"></div>
    </header>
</template>

<style>
  .header {
    width: 100%;
    background-color: #ffffff;
    font-family: "moderat",sans-serif;
    font-size: 16px;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    height: 70px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 5px 20px 10px 20px;
  }
  .navbar-left-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: -20px;
  }
  .navbar-brand-logo {
    /*width: 120px;*/
  }
  .logo {
    display: block;
    background: url('../assets/logo.jpeg') no-repeat 50% 50%;
    width:80px;
    height: 69px;
    text-indent: -9999px;
    text-align: left;
    overflow: hidden;
  }
  .header a, .footer a {
    color: #666;
    text-decoration: none;
  }
  a {
    -webkit-transition: color .3s ease-out;
    transition: color .3s ease-out;
  }
  .navbar-right-container {
    display: none;
    justify-content: flex-start;
    align-items: center;
  }
  .navbar-menu-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 10px;
  }
  .navbar-link {
    padding-left: 15px;
  }
  .navbar-cart-container {
    position: relative;
  }
  .navbar-cart-count {
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -9px;
    right: -11px;
    width: 20px;
    border-radius: 10px;
    color: white;
    background-color: #eb767d;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
  .navbar-cart-logo {
    width: 25px;
    height: 25px;
    transform: scaleX(-1);
  }
</style>

<script>
    import './../assets/css/login.css'
    import axios from 'axios'
    import { mapState } from 'vuex'

    export default{
        inject:['reload'],
        data(){
            return{
              userName:'',
              userPwd:'',
              errorTip:false,
              errorTip1:false,
              errorTip2:false,
              loginModalFlag:false,
              registModalFlag:false,
              adminloginModalFlag:false,
              username:'',
              userPassword:'',
              userpassword:''
            }
        },
        computed:{
          ...mapState(['nickName','Token','cartCount'])
        },
        /*nickName(){
          return this.$store.state.nickName;
        },
        cartCount(){
          return this.$store.state.cartCount;
        }*/
        mounted(){
            this.checkLogin();
        },
        methods:{
            checkLogin(){
                axios.get("/users/checkLogin").then((response)=>{
                  console.log(response);
                    var res = response.data;
                    var path = this.$route.pathname;
                    if(res.status=="0"){
//                      this.nickName = res.result;
                      this.$store.commit("updateUserInfo",res.result);
                      this.loginModalFlag = false;
                      this.registModalFlag = false;
                    }else{
                      if(this.$route.path!="/goods" || this.$route.path!="/userLogin"){
                        this.$router.push("/goods");
                        this.loginModalFlag = true;
                      }
                    }
                });
            },
            login(){
                if(!this.userName || !this.userPwd){
                  this.errorTip = true;
                  return;
                }
                axios.post("/users/login",{
                  userName:this.userName,
                  userPwd:this.userPwd
                }).then((response)=>{
                  console.log(response);
                    let res = response.data;
                    if(res.status=="0"){
                      this.errorTip = false;
                      this.errorTip1 = false;
                      this.loginModalFlag = false;
                      this.$store.commit("updateUserInfo",res.result.userName);
                      this.getCartCount();
                    }else{
                      this.errorTip = true;
                    }
                });
            },
            adminLogin(){
                if(!this.userName || !this.userPwd){
                  this.errorTip = true;
                  return;
                }
                axios.post("/adminUser/Login",{
                  userName:this.userName,
                  userPwd:this.userPwd
                }).then((response)=>{
                  console.log(response);
                   let res = response.data;
                    if(res.status=="10001"){
                      this.errorTip = false;
                      this.adminloginModalFlag = false;
                     this.$store.commit("updateToken",res.result.token);
                     this.$store.commit("updateUserInfo",res.result.userName);
                     this.getCartCount();
                     this.$router.push('/adminCon');
                    }else{
                      this.errorTip = true;
                    }
                });
            },
            regist(){
               if(!this.username || !this.userpassword || !this.userPassword){
                 this.errorTip = true;
                 return;
               }else if(this.userpassword != this.userPassword){
                  this.errorTip2 = true;
                  return;
               }
                 axios.post("/users/regist",{
                 userName:this.username,
                 userPwd:this.userpassword
               }).then((res)=>{
                 console.log(res)
                 let result = res.data;
                 if(result.status=="1000"){
                   this.errorTip = false;
                   this.errorTip1 = false;
                   alert('欢迎加入我们,请登录开启购物之旅！');
                   this.registModalFlag = false;
                   this.loginModalFlag = true;
                 }else if(result.status=="1001"){
                   this.errorTip1 = true;
                 }
               })
            },
            logOut(){
                axios.post("/users/logout").then((response)=>{
                    let res = response.data;
                    console.log(res);
                    if(res.status=="0"){
//                        this.nickName = '';
                        this.$store.commit("updateUserInfo",res.result.userName);
                        window.sessionStorage.removeItem('Token');
                        this.$router.go(0);
                    }
                })
            },
            getCartCount(){
              axios.get("users/getCartCount").then(res=>{
                var res = res.data;
                this.$store.commit("updateCartCount",res.result);
              });
            }
        }
    }
</script>
