<template>
<div>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="createDate"
      label="创建日期"
      width="200">
    </el-table-column>
    <el-table-column
      prop="orderId"
      label="订单编号"
      width="200">

    </el-table-column>
      <el-table-column
              prop="productInfo"
              label="订单商品"
              width="200">
      </el-table-column>
    <el-table-column
      prop="orderTotal"
      label="订单总额"
      width="200">
    </el-table-column>
    <el-table-column
      prop="orderStatus"
      label="订单状态">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button
        type="primary"
        size="mini"
          @click="handleEdit(scope.$index, scope.row)" :disabled="scope.row.orderStatus == '3'" plain>修改订单状态</el-button>
        <el-button
          type="danger"
          size="mini"
          @click="handleDelete(scope.$index, scope.row)" plain>删除订单</el-button>
      </template>
    </el-table-column>
  </el-table>
         <el-dialog title="修改订单状态" :visible.sync="dialogformVisible">
            <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="提交人">
            <el-input v-model="user" placeholder="提交人" disabled></el-input>
        </el-form-item>
        <el-form-item label="选择状态">
            <el-select v-model="orderStatus" placeholder="选择状态">
            <el-option label="已付款,待发货" value="1"></el-option>
            <el-option label="已发货" value="2"></el-option>
            <el-option label="已签收" value="3"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">提交修改</el-button>
        </el-form-item>
        </el-form>
        </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    data() {
      return {
        tableData: [],
        orderStatus:'',
        user:'商户管理员',
        dialogformVisible:false,
        orderId:0
      }
    },
    mounted(){
      const h = this.$createElement;    
          this.$notify({
          title: '小提示',
          message: h('i', { style: 'color: teal'}, '订单状态1代表已付款待发货,2代表已发货,3代表已签收'),
          duration: 10000
         });
        this.init();
    },
    methods :{
        init(){
            var userName = this.$route.params.userName;
            console.log(userName);
            axios.post('/adminUser/findOrderList', {
                params:userName
            }).then((Response) =>{
                console.log(Response);
                this.tableData = Response.data.result;
            });
        },
        handleEdit(index, row){
            this.dialogformVisible = true;
            this.orderId = this.tableData[index].orderId;
        },
        handleDelete(index, row){
             var user = this.$route.params.userName;
             this.orderId = this.tableData[index].orderId;
             
              this.$confirm('您确定要删除此订单吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                axios.post('/adminUser/deletOrder', {
                    params:{
                        userName:user,
                        orderId:this.orderId
                    }
                  }).then((response) => {
                   console.log(response);
                   if(response.data.status=="0001"){
                    this.init();
                    this.$message({
                       type: 'success',
                       message: '删除成功!'
                  });
                }else{
                 this.$message({
                    type: 'error',
                    message: '删除失败!'
                 });
                }
                 });
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                  });          
                });
        },
        onSubmit(){
            var status = this.orderStatus;
            var username = this.$route.params.userName;
            console.log(status);
            console.log(this.orderId);
            axios.post('/adminUser/updateStatus', {
                param:{
                    userName:username,
                    orderId:this.orderId,
                    orderStatus:status
                }
            }).then((response) =>{
                console.log(response);
                if(response.data.status=="000"){
                    this.init();
                    this.$message({
                       type: 'success',
                       message: '修改成功!'
                  });
                  this.dialogformVisible = false;
                }
            });
        }
    }

  }
</script>