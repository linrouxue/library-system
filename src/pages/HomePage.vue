<template>
  <!-- 首页 -->
  <div class="layout">
    <HeaderPage></HeaderPage>
    <div class="contain">
      <AsidePage></AsidePage>
      <div class="form-box">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderPage from '@/components/HeaderPage.vue';
import AsidePage from '@/components/AsidePage.vue';

</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}
.contain {
  flex: 1;
  display: flex;
}
.form-box {
  flex: 1;
  margin: 30px;
  max-height: 80%;
}
</style> 
