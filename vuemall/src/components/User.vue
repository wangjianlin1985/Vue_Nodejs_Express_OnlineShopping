<template>
<div>
  <el-table
    v-loading="loading"
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="_id"
      label="用户ID"
      width="300">
    </el-table-column>
    <el-table-column
      prop="userName"
      label="会员账号"
      width="300">
    </el-table-column>
    <el-table-column
      prop="userPwd"
      label="会员密码"
      width="200">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
          <el-button
          type="primary"
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑用户</el-button>
        <el-button
          type="danger"
          size="mini"
          @click="handleDelete(scope.$index, scope.row)" plain>删除用户</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="用户详情" :visible.sync="dialogformVisible">
        <el-form :model="form">
            <el-form-item  prop="name">
					会员ID:<el-input v-model="form._id" auto-complete="off" disabled></el-input>
				</el-form-item>
               <el-form-item  prop="name">
					会员账号:<el-input  v-model="form.userName" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item  prop="name">
					会员密码:<el-input v-model="form.userPwd" auto-complete="off"></el-input>
				</el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogformVisible = false">取 消</el-button>
            <el-button type="primary" @click="open2">确 定</el-button>
        </div>
        </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    data() {
      return {
        tableData: [],
        dialogformVisible:false,
        form:{},
        loading:true
      }
    },
    mounted(){
        this.init();
    },
    methods :{
        init(){
            axios.post('/adminUser/findAllUser', {

            }).then((Response) =>{
                console.log(Response);
                this.loading = false;
                this.tableData = Response.data.result;
            });
        },
        handleEdit(index, row){
            this.dialogformVisible = true;
            this.form = Object.assign({}, row);
        },
        z(index, row){
              var user = this.tableData[index].userName;
              console.log(user);
            
              this.$confirm('您确定要删除此用户所有信息吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                axios.post('/adminUser/deletUser', {
                    params:{
                        userName:user
                    }
                  }).then((response) => {
                   console.log(response);
                   if(response.data.status=="1000"){
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
         open2() {
            this.$confirm('您确定要修改此用户信息吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            var params = {
                _id : this.form._id,
                userName:this.form.userName,
                userPwd:this.form.userPwd
            };
            console.log(params._id);
            axios.post('/adminUser/updateUser', {
                  params:params
            }).then((res) =>{
                console.log(res);
                if(res.data.status=="1000"){
                    this.init();
                    this.$message({
                       type: 'success',
                       message: '修改成功!'
                  });
                 this.dialogformVisible = false;
                }else{
                 this.$message({
                    type: 'error',
                    message: '修改失败!'
                 });
                }
            });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消提交'
          });          
        });
      },
    }

  }
</script>