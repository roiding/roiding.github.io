<template>
  <Layout>
    <template #page-bottom>
      <div class="my-footer">「<a href="https://webify.cloudbase.net/">CloudBase Webify</a> 提供网站托管服务」</div>
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