<template>
  <Layout>
    <template #page-bottom>
      <div class="my-footer"><img src="/favicons/yp_logo.png" class="logo_img"/></div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

export default {
  components: {
    Layout,
  },
}
</script>

<style lang="css">
.my-footer {
  text-align: center;
}
.logo_img{
  width: 15%;
}
</style>