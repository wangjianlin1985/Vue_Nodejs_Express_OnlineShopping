<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="productId"
        label="商品ID"
        width="300">
      </el-table-column>
      <el-table-column
        prop="productName"
        label="商品名称"
        width="300">
      </el-table-column>
      <el-table-column
        prop="user_mes.length"
        label="已有评论数量"
        width="300">
      </el-table-column>
      <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">查看评论</el-button>
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
               axios.post('/adminUser/AllProduct',{
 
               }).then((response) =>{
                   console.log(response);
                   let res = response.data.res;
                   this.tableData = res;
               });
           },
           handleEdit(index,row){
               var productId = this.tableData[index].productId;
               console.log(productId);
               this.$router.push({name: 'EvaList', params: {productId: productId}});
           }
       }
    }
  </script>