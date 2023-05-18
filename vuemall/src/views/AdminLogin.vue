<!-- 支付成功页面 -->
<style scoped>
@charset "utf-8";
body{
    background-color: #e5ecf5;
}
*{
    margin: 0;
    padding: 0;
}

.l_float {
    float: left;
}
.r_float {
    float: right;
}
.l_clear {
    clear: left;
    display: block;
    overflow: hidden;
    content:"";
}
.r_clear {
    clear: right;
    display: block;
    overflow: hidden;
    content:"";
}
.b_clear {
    clear: both;
    display: block;
    overflow: hidden;
    content:"";
}
.show {
    display: block;
}
.hidden {
    display: none;
}
.container{
}

.container>.login_body{
    width: 1000px;
    margin: 0 auto;
    margin-top: 80px;
}
.container>.login_body>.login_form{
    width: 300px;
    /* background: #fff; */
}

.container>.login_body>.login_form>.login_top,
.container>.login_body>.login_form>.login_con{
    background-color: #fff;
}

.container>.login_body>.login_form>.login_top{
    /* padding-bottom: 30px; */
    padding: 20px 30px 10px 30px;
    border-top-left-radius: 10px;

}

.container>.login_body>.login_form>.login_top>img{
    height: 40px;
}


.container>.login_body>.login_form>.login_top>.login_tags{
/*    border-bottom: 2px solid #d9d9d9;*/
    padding: 10px 0 0;
  
}

.container>.login_body>.login_form>.login_top>.login_tags{
    /* margin: 10px 0 20px 0; */

}

.container>.login_body>.login_form>.login_top>.login_tags>span{
    padding: 10px;
    text-align: center;
    width: 50%;
    box-sizing: border-box;
    border-bottom: 1px solid #d9d9d9;


}

.container>.login_body>.login_form>.login_top>.login_tags>.active{
        border-bottom: 2px solid #703EFF;
}

.container>.login_body>.login_form>.login_con{
    padding: 20px 30px;
}

.container>.login_body>.login_form>.login_con>form>div{
    padding-bottom: 20px;
    position: relative;
}

.container>.login_body>.login_form>.login_con>form>div>img{
    width: 24px;
    position: absolute;
    bottom: 32px;
    left: 0;
}

.container>.login_body>.login_form>.login_con>form>div>.tips{
    position: absolute;
    bottom: 0px;
    font-size: 12px;
    right: 0;
    color:#5E2FE7;
}

.container>.login_body>.login_form>.login_con>form>.submit>.tips{
    text-align: center;
    bottom: -3px;
    left: 0;
}

.container>.login_body>.login_form>.login_con>form>div>label{
    font-size: 14px;
}

.container>.login_body>.login_form>.login_con>form>div>input{
    display: block;
    margin-top: 10px;
}

.container>.login_body>.login_form>.login_con>form>div>input[type=text],
.container>.login_body>.login_form>.login_con>form>div>input[type=password],
.container>.login_body>.login_form>.login_con>form>div>button[type=submit]{
    padding: 0 28px;
    outline: none;
    height: 40px;
    width: 184px;
    border: none;
    border-bottom: 2px solid #703EFF;
    color: #333;
    font-size: 16px; 
/*    position: relative;*/
}



.container>.login_body>.login_form>.login_con>form>div>#auth_code{
    width: 90px;
    font-size: 22px;
    padding-right: 4px;
}
.container>.login_body>.login_form>.login_con>form>div>.auth_code{
    height: 42px;
    margin-top: 10px;
    margin-left: 4px;
    width: 114px;
    outline: none;
    border: none;
    border-bottom: 2px solid #703EFF;
    background-color: #fff;
    
}

.container>.login_body>.login_form>.login_con>form>div>button[type=submit]{
    background-color: #703EFF;
    width: 120px;
    border-radius:50px; 
    border-bottom: none;
    cursor: pointer;
    font-size: 16px;
    color: #fff;
    text-align: center;
    font-weight: bold;

}

.container>.login_body>.login_form>.login_con>form>div>button[type=submit]:hover{
    background-color: #5E2FE7;
}

.container>.login_body>.login_form>.login_con>form>div>a{
    font-size: 12px;
    line-height: 40px;
}

.container>.login_body>.login_form>.login_con>.qr_code{
    text-align: center;
}
.container>.login_body>.login_form>.login_con>.qr_code>img{
    width: 140px;
}

.container>.login_body>.login_form>.login_con>.qr_code>p{
    font-size: 12px;
    margin-top: 10px;
}

.container>.login_body>.login_form>.login_otherAccount{
    padding: 12px 20px;
    font-size: 12px;
    border-top: 1px solid #d9d9d9;
    background-color: #fafbfc;
    border-bottom-left-radius: 10px;

}
.container>.login_body>.login_form>.login_otherAccount>span{
    margin-right: 4px;

}

.container>.login_body>.login_form>.login_otherAccount>a{
    margin-right: 2px;
}
.container>.login_body>.login_form>.login_otherAccount>a>img{
    height: 24px;
    vertical-align: middle;
}


.container>.login_body>.login_ad{
    width: 700px;
    height: 558px;;
    overflow: hidden;
    background-image: url('../assets/timg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    text-align: center;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
    box-shadow: 0 0 16px 0px rgba(0, 0, 0, 0.35);

    /* height: 100%; */
   
}
.container>.login_body>.login_ad>a{
    
    border-radius: 50px;
    position: absolute;
    bottom: 15.5%;
    left: 296px;
    padding: 10px 20px;
    text-decoration: none;
    background-color: #703EFF;
    color: #fff;
    font-size: 14px;
    border: 1px solid #703EFF;

    /* left: 0; */
}
.container>.login_body>.login_ad>a:hover{

    background-color: #fff;
    border: 1px solid #703EFF;
    color: #703EFF;
}
.footer{
    font-size: 12px;
    padding: 0 10px;
    text-align: center;
    margin-top: 26px;
    /* position: absolute;
    bottom: 0;
    left: 50% */
    /* width: 1200px; */
    /* margin: 20px auto; */
    /* position: absolute;
    bottom: 0 */


}

.footer a:link{
    color: #999999;

}
.footer a:visited{
    color: #999999;

}

.footer a:hover{
    color: #5E2FE7;
}
.footer a:active{
    color: #999999;

}

.footer,.footer>p,.footer a{
    color: #999999;
    text-decoration: none;

}

.footer>p{
    margin: 5px auto 10px;
}
.footer>a>img{
    height: 20px;
    vertical-align: middle;
    margin-right: 4px;
}
</style>


<template>
    <div>
        <el-container>
        <el-main>
            <div class="container">
             <div class="login_body l_clear">
                <div class="login_form l_float">
                    <div class="login_top">
                        <img src="../assets/logo1.jpg" alt="" >
                        <h2 style="margin-left:45px;">商家后台登录</h2>
                        <div class="login_tags b_clear">
                            <span class="top_tag l_float" v-bind:class="{active: num == 1}" v-on:click="change(1)">密码登录</span>
                            <span class="top_tag r_float" v-bind:class="{active: num == 2}" v-on:click="change(2)">扫码登录</span>
                        </div>
                    </div>
                    <div class="login_con" v-show="num == 1">
                        <form>
                            <div>
                                <label for="user_name">用户名</label>
                                <input type="text" name="" v-model="userName" placeholder="请输入商家帐号">
                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU0Mjg0OTY5NTEwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ3MTkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMzA4LjA2NTI4IDM3Mi45MDQ5NmMwLTExNC42NDcwNCA5My4yMjQ5Ni0yMDcuODgyMjQgMjA3Ljg3Mi0yMDcuODgyMjRzMjA3Ljg4MjI0IDkzLjIzNTIgMjA3Ljg4MjI0IDIwNy44ODIyNGMwIDExNC42MzY4LTkzLjIzNTIgMjA3Ljg4MjI0LTIwNy44ODIyNCAyMDcuODgyMjRTMzA4LjA2MDE2IDQ4Ny41NDY4OCAzMDguMDYwMTYgMzcyLjkwNDk2bTU4Ny44MTE4NCA1MTAuNzkxNjhjLTM0LjA2MzM2LTEyNy42MDU3Ni0xMjMuODY4MTYtMjI3LjM4NDMyLTIzNi42MzYxNi0yNzMuOTg2NTYgODAuMDYxNDQtNDguNjQ1MTIgMTMzLjg3MjY0LTEzNi40Mzc3NiAxMzMuODcyNjQtMjM2LjgxMDI0LTAuMDA1MTItMTUyLjgyMTc2LTEyNC4zNTQ1Ni0yNzcuMTY2MDgtMjc3LjE4MTQ0LTI3Ny4xNjYwOFMyMzguNzU1ODQgMjIwLjA3ODA4IDIzOC43NTU4NCAzNzIuOTA0OTZjMCAxMDAuMzYyMjQgNTMuODA2MDggMTg4LjE2IDEzMy45MDg0OCAyMzYuODA1MTItMTEyLjc3MzEyIDQ2LjYzMjk2LTIwMi41Nzc5MiAxNDYuMzgwOC0yMzYuNjYxNzYgMjczLjk4NjU2YTM0LjYzNjggMzQuNjM2OCAwIDAgMCAyNC41Mjk5MiA0Mi4zNjggMzQuNjgyODggMzQuNjgyODggMCAwIDAgNDIuNDM0NTYtMjQuNTI5OTJjMzkuNTQ2ODgtMTQ4LjAzOTY4IDE2OC4yMjI3Mi0yNTEuNDUzNDQgMzEyLjk3NTM2LTI1MS40NTM0NHMyNzMuNDU5MiAxMDMuNDE4ODggMzEyLjk5NTg0IDI1MS40NjM2OGEzNC41NzUzNiAzNC41NzUzNiAwIDAgMCA0Mi4yODA5NiAyNC41NjA2NGwwLjEyMjg4LTAuMDM1ODRhMzQuNjMxNjggMzQuNjMxNjggMCAwIDAgMjQuNTI5OTItNDIuMzczMTIiIHAtaWQ9IjQ3MjAiIGZpbGw9IiNiZmJmYmYiPjwvcGF0aD48L3N2Zz4=">
                                <p class="tips" v-show="show">商家帐号不能为空</p>
                            </div>
                            <div>
                                <label for="user_pwd">密码</label>
                                <input type="password" name="" v-model="password" placeholder="请输入密码">
                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU0Mjg1MDM1Njc1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDExNTggMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU2MDIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjI2LjE3MTg3NSIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTg1Ni4zNTA3NzggMzg4LjUyNjE2N2gtMzAuODk4NjMzdi05Mi42OTU4OThDODMzLjE3NjgwMyAxNTEuMTEzNjI2IDcyMi45Nzk3MjcgMjcuMDM2MzA0IDU3OC4yNjMwODMgMTcuNzQyNTc0Yy0xNDQuNzE2NjQzIDkuMjkzNzI5LTI1NC45MTM3MiAxMzMuMjUwMzU0LTI0Ny4xODkwNjEgMjc4LjA4NzY5NXY5Mi42OTU4OThoLTMwLjg5ODYzM2MtNTEuMTc1ODYgMC05Mi42OTU4OTggNDEuNTIwMDM4LTkyLjY5NTg5OCA5Mi42OTU4OTh2NDMyLjU4MDg1OGMwIDUxLjE3NTg2IDQxLjUyMDAzOCA5Mi42OTU4OTggOTIuNjk1ODk4IDkyLjY5NTg5OGg1NTYuMTc1Mzg5YzUxLjE3NTg2IDAgOTIuNjk1ODk4LTQxLjUyMDAzOCA5Mi42OTU4OTgtOTIuNjk1ODk4VjQ4MS4yMjIwNjVjMC01MS4xNzU4Ni00MS41MjAwMzgtOTIuNjk1ODk4LTkyLjY5NTg5OC05Mi42OTU4OTh6IG0tNDYzLjQ3OTQ5MS05Mi42OTU4OThjLTcuODQ1MzU2LTExMC42Nzk4NjggNzQuODMyNjI2LTIwNy4xMTczOTcgMTg1LjM5MTc5Ni0yMTYuMjkwNDI5IDExMC41NTkxNyA5LjE3MzAzMiAxOTMuMjM3MTUyIDEwNS42MTA1NjEgMTg1LjM5MTc5NyAyMTYuMjkwNDI5djkyLjY5NTg5OEgzOTIuODcxMjg3di05Mi42OTU4OTh6IG00OTQuMzc4MTI0IDYxNy45NzI2NTRjMCAxNy4wMTgzODgtMTMuODgwMjQ1IDMwLjg5ODYzMy0zMC44OTg2MzMgMzAuODk4NjMzSDMwMC4xNzUzODljLTE3LjAxODM4OCAwLTMwLjg5ODYzMy0xMy44ODAyNDUtMzAuODk4NjMzLTMwLjg5ODYzM1Y0ODEuMjIyMDY1YzAtMTcuMDE4Mzg4IDEzLjg4MDI0NS0zMC44OTg2MzMgMzAuODk4NjMzLTMwLjg5ODYzM2g1NTYuMTc1Mzg5YzE3LjAxODM4OCAwIDMwLjg5ODYzMyAxMy44ODAyNDUgMzAuODk4NjMzIDMwLjg5ODYzM3Y0MzIuNTgwODU4eiBtMCAwIiBwLWlkPSI1NjAzIiBmaWxsPSIjYmZiZmJmIj48L3BhdGg+PHBhdGggZD0iTTU3OC4yNjMwODMgNjA0LjgxNjU5NmMtMTcuMDE4Mzg4IDAtMzAuODk4NjMzIDEzLjg4MDI0NS0zMC44OTg2MzIgMzAuODk4NjMzdjEyMy41OTQ1MzFjMCAxNy4wMTgzODggMTMuODgwMjQ1IDMwLjg5ODYzMyAzMC44OTg2MzIgMzAuODk4NjMyIDE3LjAxODM4OCAwIDMwLjg5ODYzMy0xMy44ODAyNDUgMzAuODk4NjMzLTMwLjg5ODYzMlY2MzUuNzE1MjI5YzAtMTcuMDE4Mzg4LTEzLjg4MDI0NS0zMC44OTg2MzMtMzAuODk4NjMzLTMwLjg5ODYzM3ogbTAgMCIgcC1pZD0iNTYwNCIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjwvc3ZnPg==">
                                <p class="tips" v-show="passshow">密码不能为空</p>
                            </div>
                            <div class="b_clear submit">
                                
                                <button type="submit" @click.prevent="init()">登&nbsp;&nbsp;录</button>
                                <a href="#" class="r_float">忘记密码？</a>
                            </div>
                        </form>   
                    </div>
                    <div class="login_con" v-show="num == 2">
                        <div class="qr_code">
                                <img src="../assets/qr.png" alt="">
                                <p>请使用微信扫码登录<br>仅支持已绑定微信的账户进行快速登录</p>
                        </div>
                        
                    </div>
                    <div class="login_otherAccount">
                        <span>第三方登录</span>
                        <a href="http://"><img src="../assets/wechat.svg" alt="微信登录"></a>
                        <a href="http://"><img src="../assets/weibo.svg" alt="微博登录"></a>
                        <a href=""><img src="../assets/qq.svg" alt="QQ登录"></a>
                    </div>
                    
                </div>
                <div class="login_ad l_float" id="AdImg">
                    <a href="">查看详情</a>
                </div>
            </div>
             <div class="footer">
                        <p>Copyright © 2019-2019  <a href="#"></a>涛涛购物网站</p>
                    </div>

            </div>
        </el-main>
        </el-container>
    </div>
</template>

<script>
    import axios from 'axios'
    import { mapState } from 'vuex'

    export default{
        data(){
            return{
                userName:'',
                password:'',
                num:1,
                show:false,
                passshow:false
            }
        },
        computed:{
          ...mapState(['nickName','Token','cartCount'])
        },
        mounted(){
           
        },
        methods :{
             change(index) {
                this.num = index
              },
              init(){
                  if(this.userName=='' && this.password!=''){
                      this.show = true;
                      this.passshow = false;
                      return;
                  }else if(this.userName != '' && this.password == ''){
                       this.passshow = true;
                       this.show = false;
                       return;
                  }else if(this.userName == '' && this.password == ''){
                      this.show = true;
                      this.passshow = true;
                  }else{
                      this.show = false;
                      this.passshow = false;
                      axios.post("/adminUser/Login",{
                        userName:this.userName,
                        userPwd:this.password
                    }).then((response)=>{
                    console.log(response);
                        let res = response.data;
                        if(res.status=="10001"){
                        this.$store.commit("updateToken", res.result.token);
                        this.$store.commit("updateUserInfo",res.result.userName);
                        this.$router.push("/adminCon");
                        }else {
                            alert('账号密码错误，请重新输入！')
                        }
                    });
                  }
              }
        }
    }
</script>
