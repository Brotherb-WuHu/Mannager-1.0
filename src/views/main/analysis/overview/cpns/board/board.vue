<template>
  <el-card shadow="always" class="box-card">
    <template #header>
      <div class="card-header">
        <span>错误提示</span>
      </div>
    </template>
    <div class="text item">
      <span>修改提示</span>
    </div>
  </el-card>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 10px;
}

.box-card {
  width: 90%;
  border-left: 4px solid rgb(233, 176, 32);
}
.box-card:hover {
  // background-color: rgb(206, 82, 44);
}
</style>
