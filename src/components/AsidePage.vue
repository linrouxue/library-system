<template>
<!-- 首页 -->
<div class="aside">
    <router-link v-if='isAdmin' to="/home/user" style="text-decoration:none"><div class="list">查询用户</div></router-link>
    <router-link v-if='isAdmin' to="/home/book" style="text-decoration:none"><div class="list">查询书籍</div></router-link>
    <router-link v-if='isAdmin' to="/home/send" style="text-decoration:none"><div class="list">借书详情</div></router-link>
    <!-- 用户 -->
    <router-link v-if='!isAdmin' to="/user/FindBook" style="text-decoration:none"><div class="list">查询书籍</div></router-link>
    <router-link v-if='!isAdmin' to="/user/AlreadySend" style="text-decoration:none"><div class="list">已借书籍</div></router-link>
</div>
</template>

<script setup>
import {  onBeforeMount,ref } from 'vue'
const isAdmin = ref(false);
onBeforeMount(() => {
   isAdmin.value = localStorage.getItem('role')==='admin'?true:false;
});
</script>

<style scoped>
.aside {
    width: 200px;
    height: 100%;
    background-color: #3a8fe4;
    color: #fff;
}
.list {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    background-color: #7fb8f0;
    border: #4ba1f6;
    color: #fff;
}
.list:hover {
    cursor: pointer;
    background-color: #4ba1f6;
}
</style> 
  