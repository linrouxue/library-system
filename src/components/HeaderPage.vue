<template>
<!-- 首页 -->
<div class="header">
    <div class="title">图书管理系统</div>
    <div class="user-icon">
        <el-icon><User /></el-icon>
    </div>
</div>
</template>

<script setup>
import { User } from '@element-plus/icons-vue';
// export default {
// name: 'headerPage',
// props: {
//     msg: String
// }
// }
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
}
</style> 
  