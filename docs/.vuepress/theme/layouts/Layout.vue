<template>
  <Layout>
    <template #page-bottom>
      <div class="my-footer">本网站由<a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral"><img src="/favicons/yp_logo.png"/></a>提供CDN加速/云存储服务</div>
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
</style>