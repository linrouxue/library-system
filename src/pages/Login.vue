<template>
    <div class="login">
        <img class="login-image" src="@/assets/images/readBook.png" alt="">
        <div class="login-right">
            <div class="login-title">图书管理系统</div>
            <div class="login-box">
                <el-form :model="form" label-width="auto">
                <el-form-item label="账号">
                    <el-input v-model="form.account" 
                        style="width: 300px;"
                        placeholder="请输入账号"
                    />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input
                        v-model="form.password"
                        type="password"
                        placeholder="请输入密码"
                        show-password
                    />
                </el-form-item>
                <el-form-item label="类别">
                <el-radio-group v-model="form.class">
                    <el-radio value="user">用户</el-radio>
                    <el-radio value="manage">管理员</el-radio>
                </el-radio-group>
                </el-form-item>
                <el-form-item>
                <router-link to="/home"><el-button type="primary" @click="onSubmit">登录</el-button></router-link>
                </el-form-item>
            </el-form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
const form = reactive({
  account: '',
  password: '',
  class: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style scoped>
.login {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
}
.login-image {
    height: 100%;
}
.login-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: skyblue;
    height: 100%;
}
.login-title{
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #fff;
}
.login-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 300px;
    border-radius: 12px;
    background-color: #fff;
}
</style> 
  