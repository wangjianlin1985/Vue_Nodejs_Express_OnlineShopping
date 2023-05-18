<!-- 购物车页面 -->

<template>
  <div>
<el-container style="height: 1000px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>商品操作</template>
        <el-menu-item-group>
          <el-menu-item index="/product">商品管理</el-menu-item>
          <el-menu-item index="/order">订单管理</el-menu-item>
          <el-menu-item index="/productEva">评论管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>用户操作</template>
        <el-menu-item-group>
          <el-menu-item index="/user">用户列表</el-menu-item>
          <el-menu-item index="/userAddress">地址管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
        <el-menu-item-group>
          <el-menu-item index="/edit">修改密码</el-menu-item>
          <el-menu-item index="1-3">系统测试</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="toindex">回到首页</el-dropdown-item>
          <el-dropdown-item @click.native="logout">登出</el-dropdown-item>
          <el-dropdown-item disabled>新增</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
     <span class="navbar-link" v-text="nickName" v-if="Token"></span>
    </el-header>
    
    <el-main>
     <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
import Vuex from 'vuex'
import axios from 'axios'
import { mapState } from 'vuex'

  export default {
    data() {
      return {
          nickname:''
      }
    },
    mounted(){
    },
    computed:{
          ...mapState(['nickName','Token','cartCount'])
        },
    methods: {
        toindex(){
            console.log('333');
            this.$router.push('/');
        },
        logout(){
            console.log('444');
                axios.post("/adminUser/Logout").then((response)=>{
                    let res = response.data;
                    console.log(res);
                    if(res.status=="0"){
//                        this.nickName = '';
                        this.$store.commit("updateUserInfo",res.result.userName);
                        this.$store.commit("updateToken",res.result.token);
                        window.sessionStorage.removeItem('Token');
                        this.$router.go(0);
                    }
          })
        }
    }
  };
</script>