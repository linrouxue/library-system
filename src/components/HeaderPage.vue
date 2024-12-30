<template>
<!-- 首页 -->
<div class="header">
    <div class="title">图书管理系统</div>
    <div class="user-icon">
        <el-dropdown>
            <el-icon class="user-icon"><User /></el-icon>
            <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="loginOut">
                    <router-link to="/login" class="login-out">退出登录</router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                    <span class="login-out">修改密码</span>
                </el-dropdown-item>
            </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</div>
</template>

<script setup>
import { User } from '@element-plus/icons-vue';

</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 20px;
    background-color: #3a8fe4;
    color: #fff;
}
.title {
    font-size: 24px;
    font-weight: bold;
}
.user-icon {
    margin-right: 10px;
    
    font-size: 20px;
    cursor: pointer;
    color: #fff;
}
.login-out {
    text-decoration:none;
    color: #3a8fe4;
}
</style> 
  