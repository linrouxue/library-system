<template>
  <!-- 首页 -->
  <div class="layout">
    <HeaderPage></HeaderPage>
    <div class="contain">
      <AsidePage></AsidePage>
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
  /* display: flex;
  flex-direction: row; */
}
</style> 
