<template>
<div>
  <el-table
    v-loading="loading"
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>商品名称：{{ props.row.productName }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>商品 ID：{{ props.row.productId }}</span>
          </el-form-item>
          <el-form-item label="商品价格">
            <span>商品价格：{{ props.row.salePrice }}</span>
          </el-form-item>
          <el-form-item label="商品图片地址">
            <span>商品图片地址：{{ props.row.productImage }}</span>
          </el-form-item>

        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="商品 ID"
      prop="productId">
    </el-table-column>
    <el-table-column
      label="商品名称"
      prop="productName">
    </el-table-column>
    <el-table-column
      label="价格"
      prop="salePrice">
    </el-table-column>

    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button type="primary" style="margin-left:925px;margin-top:30px;" @click="addProduct">新增产品<i class="el-icon-upload el-icon--right"></i></el-button>
  <!--编辑界面-->
      <el-dialog title="商品详情" :visible.sync="dialogFormVisible">
        <el-form :model="form">
               <el-form-item  prop="name">
					商品名称:<el-input  v-model="form.productName" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item  prop="name">
					商品ID:<el-input v-model="form.productId" auto-complete="off" disabled></el-input>
				</el-form-item>
                <el-form-item  prop="name">
					商品价格:<el-input v-model="form.salePrice" auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item  prop="name">
					商品图片地址:<el-input v-model="form.productImage" auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item  prop="name">
                    商品描述:<el-input rows="5" type="textarea" v-model="form.productDesc" auto-complete="off" ></el-input>
                </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="open2">确 定</el-button>
        </div>
        </el-dialog>
        <!-- 增加界面 -->
         <el-dialog title="添加商品信息" :visible.sync="dialogformVisible">
        <el-form>
               <el-form-item  prop="name">
					商品名称:<el-input  v-model="productName" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item  prop="name">
					商品ID:<el-input v-model="productId" auto-complete="off" ></el-input>
				</el-form-item>
                <el-form-item  prop="name">
					商品价格:<el-input v-model="salePrice" auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item  prop="name">
					商品图片地址:<el-input v-model="productImage" auto-complete="off"></el-input>
				</el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogformVisible = false">取 消</el-button>
            <el-button type="primary" @click="open">确 定</el-button>
        </div>
        </el-dialog>
  </div>
</template>


<style>
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
  import axios from 'axios'

  export default {
    data() {
      return {
        tableData5: [],
        dialogFormVisible: false,
        dialogformVisible:false,
        formLabelWidth: '120px',
        form:{},
        loading: true,
        productId:0,
        productName:'',
        productImage:'',
        productDesc: '',
        salePrice:0
      }
    },
    mounted(){
        this.init();
    },
    methods :{
        init(){
            axios.post('/adminUser/AllProduct',{

            }).then((res) =>{
               console.log(res);
               this.loading = false;
               let data = res.data.res;
               this.tableData5 = data;
            });
        },

        handleEdit: function (index, row) {
              this.dialogFormVisible = true;
              console.log(index);
              this.form = Object.assign({}, row);
     },
        handleDelete: function (index, row) {
              var productId = this.tableData5[index].productId;
              console.log(productId);
              this.$confirm('您确定要删除此商品信息吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                axios.post('/adminUser/deletProduct', {
                    data:productId
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
        this.$confirm('您确定要修改此商品信息吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            var params = {
                productName:this.form.productName,
                productId:this.form.productId,
                salePrice:this.form.salePrice,
                productImage:this.form.productImage,
                productDesc: this.form.productDesc
            };
            axios.post('/adminUser/updateProduct', {
                  params:params
            }).then((res) =>{
                console.log(res);
                if(res.data.status=="100"){
                    this.init();
                    this.$message({
                       type: 'success',
                       message: '修改成功!'
                  });
                 this.dialogFormVisible = false;
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
            message: '已取消修改'
          });          
        });
      },
      addProduct(){
          console.log('123');
          this.dialogformVisible = true;
      },
      open(){
           this.$confirm('您确定要增加此商品吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            var param = {
                productName:this.productName,
                productId:this.productId,
                salePrice:this.salePrice,
                productImage:this.productImage
            };
            console.log(param);
            axios.post('/adminUser/addProduct', {
                  param:param
            }).then((res) =>{
                console.log(res);
                if(res.data.status=="10000"){
                    this.init();
                    this.$message({
                       type: 'success',
                       message: '增加成功!'
                  });
                 this.dialogformVisible = false;
                }else{
                 this.$message({
                    type: 'error',
                    message: '增加失败!'
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