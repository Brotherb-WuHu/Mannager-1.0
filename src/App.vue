<template>
  <div class="app">
    <!-- <router-link to="login">登录</router-link>
    <router-link to="main">首页</router-link>
    <router-link to="demo">测试</router-link> -->

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style lang="less" scoped>
.app {
  width: 100%;
  height: 100%;
}
</style>
