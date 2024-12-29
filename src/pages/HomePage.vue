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

<script>
import HeaderPage from '@/components/HeaderPage.vue';
import AsidePage from '@/components/AsidePage.vue';
export default {
  name: 'HomePage',
  components: {
    HeaderPage,
    AsidePage
  },
}
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.contain {
  flex: 1;
  display: flex;
}
.form-box {
  flex: 1;
  margin: 30px;
  height: 800px;
  overflow: scroll;
}
</style> 
