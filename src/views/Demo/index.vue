<template>
  <div>
    <h2>banners : {{ banners }}</h2>
    <h2>recommmends : {{ recommmends }}</h2>

    <button @click="add">add</button>
    <button @click="asyncRequest">asyncRequest</button>

    <h2>轮播数据展示</h2>

    <ul>
      <template v-for="item in banners" key="item">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useDemoStore } from '@/store/demo'

export default defineComponent({
  setup() {
    const demoStore = useDemoStore()
    const { count, banners, recommmends } = storeToRefs(demoStore)

    function add() {
      demoStore.incrementNum(10)
    }

    function asyncRequest() {
      //demoStore.fetchHomeMultidata()
      // 调用一下，更新数据到 pinia 的 banners recinnebds即可，不一定要用then
      demoStore.fetchHomeMultidata().then((res) => {
        console.log('fetchHomeMultidata的action返回的结果', res)
      })
    }

    return {
      demoStore,
      count,
      add,
      asyncRequest,
      banners,
      recommmends
    }
  }
})
</script>

<style scoped>
</style>
