<template>
  <div class="side-bar">
    <el-button type="primary" class="subBtn" @click="getRes"
      >开始校对</el-button
    >

    <el-card shadow="always" class="box-card">
      <template #header>
        <div class="card-header">
          <span>所有提示: </span>
          <span>{{ data.count }}</span>
        </div>
      </template>
      <div class="text item">
        <span>高概率:</span>
        <span>{{ hight }}</span>
      </div>
      <div class="text item">
        <span>低概率:</span>
        <span>{{ low }}</span>
      </div>
      <div class="text item">
        <span>敏感词:</span>
        <span>{{ sensitive }}</span>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useContrastStore } from '@/store/contrast/contrast'
import CacheMethods from '@/utils/cache'
import { IRootObject, IData } from '@/service/contrast/types'

export default defineComponent({
  setup() {
    const getRes = useContrastStore().GetContrastRes()
    const contrastStore = storeToRefs(useContrastStore())

    let res = <IRootObject>CacheMethods.getCache('contrastResult')
    let data = <IData>CacheMethods.getCache('contrastData')

    let hight = data.correctList.words.length + data.correctList.lack.length
    let low = data.correctList.redund.length
    let sensitive = data.correctList.blackList.length

    console.log(res)

    return {
      getRes,
      res,
      data,
      hight,
      low,
      sensitive
    }
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
