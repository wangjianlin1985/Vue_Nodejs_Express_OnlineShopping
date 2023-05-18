<template>
    <div>
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="200px" class="demo-ruleForm">
      <el-form-item  prop="age">
    旧密码:&#12288;<el-input v-model.number="ruleForm2.age"  type="password" style="width:250px;"></el-input>
  </el-form-item>
  <el-form-item  prop="pass">
    新密码:&#12288;<el-input type="password" v-model="ruleForm2.pass" auto-complete="off" style="width:250px;"></el-input>
  </el-form-item>
  <el-form-item prop="checkPass">
    确认密码:&#12288;<el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" style="width:250px;"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
</el-form>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('旧密码不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字'));
          } else {
              callback();
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        }else if(value == this.ruleForm2.age){
          callback(new Error('旧密码不能与新密码相同!'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              var pass = this.ruleForm2.pass;
              console.log(pass);
              this.$confirm('您确定要修改密码吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                axios.post('/adminUser/searchPass', {
                    data:pass
                  }).then((response) => {
                   console.log(response);
                   if(response.data.status=="1000"){
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
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>