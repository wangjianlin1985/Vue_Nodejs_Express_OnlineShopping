<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="userName"
        label="会员账号"
        width="400">
      </el-table-column>
      <el-table-column
        prop="addressList.length"
        label="已添加地址数"
        width="400">
      </el-table-column>
      <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">查看地址详请</el-button>
      </template>
     </el-table-column>
    </el-table>
  </template>

  <script>
  import axios from 'axios'

    export default {
      data() {
        return {
          tableData: []
        }
      },
       mounted(){
        this.init();
       },
       methods :{
           init(){
               axios.post('/adminUser/findAllUser',{
 
               }).then((response) =>{
                   console.log(response);
                   let res = response.data.result;
                   this.tableData = res;
               });
           },
           handleEdit(index,row){
               var userName = this.tableData[index].userName;
               console.log(userName);
               this.$router.push({name: 'UserAddressList', params: {userName: userName}});
           }
       }
    }
  </script>