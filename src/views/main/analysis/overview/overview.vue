<template>
  <el-container class="overview">
    <el-main class="content">
      <content />
    </el-main>
    <el-main class="board">
      <board></board>
    </el-main>

    <el-main class="sideBar">
      <side-bar />
    </el-main>
  </el-container>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

import board from './cpns/board/board.vue'
import content from './cpns/content/content.vue'
import sideBar from './cpns/side-bar/side-bar.vue'

export default defineComponent({
  name: 'overview',
  components: {
    board,
    content,
    sideBar
  },
  setup() {
    // 加载对比结果

    return {}
  }
})
</script>

<style scoped lang="less">
.overview {
  height: 100%;
}

.overview {
  // background-color: red;

  .content {
    width: 60%;
    // background-color: aquamarine;
  }

  .board {
    width: 30%;
    // background-color: lightsteelblue;
  }

  .sideBar {
    // background-color: lightgreen;
  }
}
</style>
