<template>
<div>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="userName"
      label="用户昵称"
      width="200">
    </el-table-column>
    <el-table-column
      prop="mes_content"
      label="评论内容"
      width="400">
    </el-table-column>
    <el-table-column
      prop="create_time"
      label="评论日期"
      width="200">
    </el-table-column>
     <el-table-column
      label="星级评分"
      width="200">
      <template slot-scope="scope">
      <el-rate
        v-model="scope.row.starLevel"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value}">
      </el-rate>
      </template>
     </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button
          type="danger"
          size="mini"
          @click="handleDelete(scope.$index, scope.row)" plain>删除评论</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    data() {
      return {
        tableData: [],
        dialogformVisible:false
      }
    },
    mounted(){
        this.init();
    },
    methods :{
        init(){
            var productId = this.$route.params.productId;
            axios.post('/adminUser/findEvaList', {
                productId:productId
            }).then((Response) =>{
                console.log(Response);
                this.tableData = Response.data.result;
            });
        },
        // handleEdit(index, row){
        //     this.dialogformVisible = true;
        //     this.orderId = this.tableData[index].orderId;
        // },
        handleDelete(index, row){
             var productId = this.$route.params.productId;
              var create_time = this.tableData[index].create_time;
              console.log(productId);
              console.log(create_time);
            
              this.$confirm('您确定要删除此评论吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                axios.post('/adminUser/deletEva', {
                    params:{
                        create_time:create_time,
                        productId:productId
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
        },
    }

  }
</script>