<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="" alt="" />
      <span v-if="!collapse" class="title">Vue3+TS</span>
    </div>

    <el-menu default-active="39" :collapse="collapse" class="el-menu-vertical">
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 (type = 1 则还有可以展开的菜单) -->
        <template v-if="item.type === 1">
          <!-- 二级菜单的可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <!-- 当标题里有图标和标题时，要用template #title 不然 css 会乱 -->
            <template #title>
              <!-- <el-icon><component :is="item.icon" /></el-icon> -->
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>

            <!-- 遍历里面的item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>

        <!-- 一级菜单 (type = 2 则只有一个菜单) -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLoginStore } from '@/store/login/login'
import { storeToRefs } from 'pinia'
import router from '@/router'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'el-icon-monitor': {
      template: '<div>hi<div/>'
    },
    'el-icon-setting': {
      template: '<Setting />'
    }
  },
  setup() {
    const userMenus = storeToRefs(useLoginStore()).userMenus.value

    const handleMenuItemClick = (item: any) => {
      console.log(item.url)
      router.push({
        // path: item.url ?? '/not-found'
        path: item.url ?? '/'
      })
    }
    console.log(userMenus)

    return { userMenus, handleMenuItemClick }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  .el-sub-menu {
    background-color: #001529 !important;

    // 二级菜单(默认背景)
    .el-menu-item {
      padding-left: 55px !important;
      color: antiquewhite !important;

      background-color: #0c2135;
    }
  }

  ::v-deep .el-sub-menu__title {
    color: antiquewhite;
    background-color: #001529 !important;
  }

  // hover 高亮

  .el-menu-item:hover {
    color: #fff !important;
    background-color: #3a6fa7 !important;
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

// 目录

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  // height: calc(100% - 48px);
}
</style>
