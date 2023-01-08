<template>
  <!-- 别忘了 :model="account 双向绑定-->
  <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
    <!-- prop 是用来匹配 rules 规则的 -->
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name" />
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        v-model="account.password"
        autocomplete="off"
        show-password
      />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { ElForm } from 'element-plus'
import { useLoginStore } from '@/store/login/login'
import { IAccount } from '../config/types'
import { storeToRefs } from 'pinia'
import localCache from '@/utils/cache'
// 编写好规则，e-plus是默认集成async-validator这个库的
// 匹配规则单独抽到一个文件
import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const LoginStore = useLoginStore()

    const account = reactive<IAccount>({
      // 如果有缓存，就用缓存的，没有就用空字符串
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    /* 登录逻辑 */
    // InstanceType<typeof 组件> 这是很常见的获取组件对象类型的方法
    const formRef = ref<InstanceType<typeof ElForm>>()

    // loginAction 不是在这里用，而是由父组件 login-panel 通过 ref来调用
    const loginAction = (isKeepPsw: boolean) => {
      // 1.校验。上面是输入限制只是会报红字，并不会限制登录

      // 校验关键：拿到 form 组件对象后调用里面的 validate 方法
      formRef.value?.validate((valid) => {
        if (valid) {
          // 2.记住密码
          if (isKeepPsw) {
            // 缓存到浏览器,逻辑写在 utils 里面我们专门的工具
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }

          // 3.开始登录验证
          LoginStore.accountLoginAction({ ...account })

          console.log('登录成功')
        }
      })
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

