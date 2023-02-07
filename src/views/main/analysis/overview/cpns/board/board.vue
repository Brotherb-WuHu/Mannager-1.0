<template>
  <!-- words 卡片 -->
  <template v-for="item in words" :key="item.id">
    <el-card shadow="always" class="box-card words">
      <template #header>
        <div class="card-header">
          <span>{{ item.original }}</span>
        </div>
      </template>
      <div class="text item">
        <span>{{ item.result }}</span>
      </div>
    </el-card>
  </template>

  <!-- lack 卡片 -->
  <template v-for="item in lack" :key="item.id">
    <el-card shadow="always" class="box-card lack">
      <template #header>
        <div class="card-header">
          <span>{{ item.original }}</span>
        </div>
      </template>
      <div class="text item">
        <span>{{ item.result }}</span>
      </div>
    </el-card>
  </template>

  <!-- redund 卡片 -->
  <template v-for="item in redund" :key="item.id">
    <el-card shadow="always" class="box-card redund">
      <template #header>
        <div class="card-header">
          <span>{{ item.original }}</span>
        </div>
      </template>
      <!-- <div class="text item">
        <span>{{ item.result }}</span>
      </div> -->
    </el-card>
  </template>

  <!-- blackList 卡片 -->
  <template v-for="item in blackList" :key="item.id">
    <el-card shadow="always" class="box-card blackList">
      <template #header>
        <div class="card-header">
          <span>{{ item.original }}</span>
        </div>
      </template>
      <div class="text item">
        <span>{{ item.result }}</span>
      </div>
    </el-card>
  </template>
</template>



<script lang="ts">
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import CacheMethods from '@/utils/cache'
import { IData } from '@/service/contrast/types'

export default defineComponent({
  setup() {
    // const contrastStore = storeToRefs(useContrastStore())

    let data = <IData>CacheMethods.getCache('contrastData')
    let correctList = data.correctList

    let { words, lack, redund, blackList } = correctList

    console.log(correctList)

    return {
      data,
      correctList,
      words,
      lack,
      redund,
      blackList
    }
  }
})
</script>

<style scoped lang="less">
.box-card {
  width: 90%;
  // border-left: 4px solid rgb(233, 176, 32);
  margin-bottom: 15px;
}

.words {
  border-left: 4px solid rgb(233, 176, 32);
}

.lack {
  border-left: 4px solid lightcoral;
}

.redund {
  border-left: 4px solid lightseagreen;
}

.blackList {
  border-left: 4px solid lightslategray;
}

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
</style>
