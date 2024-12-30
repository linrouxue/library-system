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
                    退出登录
                </el-dropdown-item>
                <el-dropdown-item>
                    修改密码
                </el-dropdown-item>
            </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</div>
</template>

<script setup>
import { User } from '@element-plus/icons-vue';
import router from '@/router';

const loginOut = () => {
    localStorage.clear();
    router.push('/login');
}
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
</style> 
  