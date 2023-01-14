<template>
  <div class="side-bar">
    <el-button type="primary" class="subBtn">开始校对</el-button>

    <el-card shadow="always" class="box-card">
      <template #header>
        <div class="card-header">
          <span>所有提示</span>
        </div>
      </template>
      <div class="text item">
        <span>高概率:</span>
      </div>
      <div class="text item">
        <span>低概率:</span>
      </div>
      <div class="text item">
        <span>敏感词:</span>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang='less'>
.side-bar {
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.subBtn {
  width: 120px;
  height: 60px;
  text-align: center;
  border-radius: 8px;
  font-size: 16px;
  padding: 0;
  color: #fff;
  background: #0a56d6;
}

.item {
  margin-bottom: 10px;
}

.box-card {
  width: 120px;
  margin-top: 15px;
}
</style>
