<template>
  <div class="nav-header">
    <template v-if="!isFold">
      <el-icon class="Fold" @click="handleFoldClick"><Fold /></el-icon>
    </template>
    <template v-else>
      <el-icon class="Expand" @click="handleFoldClick"><Expand /></el-icon>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return { handleFoldClick, isFold }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  .Fold {
    font-size: 30px;
    cursor: pointer;
  }

  .Expand {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
