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
                <el-dropdown-item @click="changePasswords">
                    修改密码
                </el-dropdown-item>
            </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
    <el-dialog v-model="passwordVisible" title="请输入新密码" width="500">
        <el-input v-model="newPassword" placeholder="请输入新密码"></el-input>
        <template #footer>
        <div class="dialog-footer">
            <el-button @click="passwordVisible = false">取消</el-button>
            <el-button type="primary" @click="comfirmAdd">
            确定
            </el-button>
        </div>
        </template>
    </el-dialog>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { User } from '@element-plus/icons-vue';
import router from '@/router';
import { changePassword } from '@/utils/api.js';
import { ElMessage} from 'element-plus';

// 退出登录
const loginOut = () => {
    localStorage.clear();
    router.push('/login');
}
// 修改密码
let newPassword = ref('');
let passwordVisible = ref(false);
const changePasswords = () => {
    passwordVisible.value = true;
    console.log(passwordVisible.value);
    newPassword.value = '';
}
const comfirmAdd = () => {
    changePassword('/changePassword',{
        RID: JSON.parse(localStorage.getItem('info')).account,
        password: newPassword.value
    }).then(res => {
        if(res.status===200){
            ElMessage.success(res.data.message);
            passwordVisible.value = false;
            loginOut();
        }
    }).catch(err => {
        console.log(err);
        ElMessage.error('借阅失败');
    })
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
  