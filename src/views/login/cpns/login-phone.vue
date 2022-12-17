<template>
  <!-- 别忘了 :model="account 双向绑定-->
  <el-form label-width="60px" :rules="rules" :model="phone" ref="formRef">
    <!-- prop 用来匹配 rules 规则的 -->
    <el-form-item label="手机" prop="phone">
      <el-input v-model="phone.phone" />
    </el-form-item>

    <el-form-item label="验证码" prop="checkCode">
      <div class="checkCode">
        <el-input
          v-model="phone.checkCode"
          type="password"
          autocomplete="off"
        />
        <el-button type="primary" class="getBtn">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from 'vue'
import { rules } from '../config/phone-config'
import { ElForm } from 'element-plus'
import { useLoginStore } from '@/store/login/login'
import { IPhone } from '../config/types'
import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const phone = reactive<IPhone>({
      phone: localCache.getCache('phone') ?? '',
      checkCode: ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginStore = useLoginStore()

    /* 登录逻辑 */
    const loginAction = (isKeepPsw: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPsw) {
            localCache.setCache('phone', phone.phone)
          } else {
            localCache.deleteCache('phone')
          }

          loginStore.phoneLoginAction({ ...phone })
        }
      })
    }

    return {
      phone,
      rules,
      formRef,
      loginAction
    }
  }
})
</script>


<style lang="less" scoped>
.checkCode {
  display: flex;

  .getBtn {
    margin-left: 8px;
  }
}
</style>

