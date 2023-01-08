<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <!-- 如何判断用户选的是account 还是 phone 登录呢？ -->
    <!-- 要用el-tab自带属性 name 和 v-model 了 -->
    <!-- name 绑定不同 tab 对应的值，v-model 把 name 对应的东西绑定到 el-tab即 选中哪个-->

    <el-tabs type="border-card" stretch class="demo-tabs" v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><calendar /></el-icon>
            <span> 账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>

        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPsw">记住密码</el-checkbox>
      <el-link :underline="false" type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Calendar, Cellphone } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  name: 'App',
  components: { LoginAccount, LoginPhone, Calendar },

  setup() {
    const isKeepPsw = ref(true)
    /* 登录逻辑 */
    // 当前组件拿不到账号和密码,所以账号的登录逻辑应该写到里面的组件去
    // 怎么操作呢？很简单，拿到对应组件对象，然后调用里面的登录方法就行

    // 常见技巧:不想写any，但是要获取组件对象的类型
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()

    // 定义选中 account 或者 phone 的变量.我们默认选中 account
    const currentTab = ref('account')

    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        console.log('登录account', accountRef.value)
        accountRef.value?.loginAction(isKeepPsw.value)
      } else {
        console.log('登录phone', phoneRef.value)
        phoneRef.value?.loginAction(isKeepPsw.value)
      }
    }

    return {
      isKeepPsw,
      handleLoginClick,
      currentTab,
      phoneRef,
      accountRef
    }
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  margin-bottom: 100px;
  width: 320px;
  height: 400px;

  .title {
    text-align: center;
  }
}

.login-btn {
  width: 100%;
  margin-top: 20px;
}

.account-control {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
