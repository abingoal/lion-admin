<template>
    <el-form class="loginform" :model="loginForm" :rules="rules" ref="loginForm" label-position="left" label-width="0px">
        <img src="../assets/logo.png" class="logo">
        <h3 class="title">系统登录</h3>
        <el-form-item prop="account">
            <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
            <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox class="remember" v-model="checked" checked>记住密码</el-checkbox>
        <el-form-item>
            <el-button class="loginsubmit" type="primary" @click.native.prevent="submitLogin" :loading="loading">登录</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import { login } from '@/mock/api'
export default {
  name: 'login',
  data () {
    return {
      loading: false,
      loginForm: {
        account: 'admin',
        password: '123456'
      },
      rules: {
        account: [{
          required: true, message: '请输入账号', trigger: 'blur'
        }],
        password: [{
          required: true, message: '请输入密码', trigger: 'blur'
        }]
      },
      checked: true
    }
  },
  methods: {
    submitLogin () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true
          const loginParms = { username: this.loginForm.account, password: this.loginForm.password }
          login(loginParms).then(data => {
            this.loading = false
            let { msg, code, user } = data
            if (code !== 200) {
              this.$message({
                message: msg,
                type: 'error'
              })
            } else {
              sessionStorage.setItem('user', JSON.stringify(user))
              this.$router.push({ path: '/dashboard' })
            }
          })
        } else {
          console.log('验证失败')
          return false
        }
      })
    }
  }
}

</script>
<style lang="scss" scoped>
.logo{
  margin: 0 auto;
  display: flex;
}
.title{
  text-align: center;
}
.loginform {
    border-radius: 5px;
    background-clip: padding-box;
    padding: 40px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    margin: auto;
    height: 390px;
    width: 350px;

    .remember {
        margin-bottom: 20px;
    }

    .loginsubmit {
        width: 100%;
    }
}
</style>
