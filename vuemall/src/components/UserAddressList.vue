<template>
<div>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="userName"
      label="收货人姓名"
      width="200">
    </el-table-column>
    <el-table-column
      prop="streetName"
      label="收货地址"
      width="200">
    </el-table-column>
    <el-table-column
      prop="tel"
      label="联系电话"
      width="200">
    </el-table-column>
    <el-table-column
      label="是否默认">
      <template slot-scope="scope">
          <p v-if="scope.row.isDefault==true">是</p>
          <p v-else>否</p>
      </template>
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button
        type="primary"
        size="mini"
          @click="handleEdit(scope.$index, scope.row)" plain>修改地址</el-button>
        <el-button
          type="danger"
          size="mini"
          @click="handleDelete(scope.$index, scope.row)" plain>删除地址</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="用户详情" :visible.sync="dialogformVisible">
        <el-form :model="form">
            <el-form-item  prop="name">
					收货人姓名:<el-input v-model="form.userName" auto-complete="off"></el-input>
				</el-form-item>
               <el-form-item  prop="name">
					收货地址:<el-input  v-model="form.streetName" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item  prop="name">
					联系电话:<el-input v-model="form.tel" auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item  prop="name">
                    默认地址:<br/><el-switch
                            v-model="form.isDefault"
                            active-text="是"
                            inactive-text="否">
                            </el-switch>
                 </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogformVisible = false">取 消</el-button>
            <el-button type="primary" @click="subChange">确 定</el-button>
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
        id:0
      }
    },
    mounted(){
        this.init();
    },
    methods :{
        init(){
            var userName = this.$route.params.userName;
            console.log(userName);
            axios.post('/adminUser/findAddressList', {
                params:userName
            }).then((Response) =>{
                console.log(Response);
                this.tableData = Response.data.result;
            });
        },
        handleEdit(index, row){
            this.dialogformVisible = true;
            this.id = this.tableData[index]._id;
            this.form = Object.assign({}, row);
        },
        handleDelete(index, row){
             var _id = this.tableData[index]._id;
             console.log(_id);
             var user = this.$route.params.userName;
             console.log(user);
              this.$confirm('您确定要删除此订单吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                axios.post('/adminUser/deletAddress', {
                    params:{
                        _id:_id,
                        userName:user
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
        subChange(){
            this.$confirm('您确定要修改此收货信息吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
             var params={
                user:this.$route.params.userName,
                id:this.id,
                userName:this.form.userName,
                streetName:this.form.streetName,
                tel:this.form.tel,
                isDefault:this.form.isDefault
            }
            console.log(params.isDefault);
            axios.post('/adminUser/updateAddress', {
                param:params
            }).then((response) =>{
                console.log(response);
                if(response.data.status=="000"){
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
        }
    }

  }
</script>