<template>
  <!-- 别忘了 :model="account 双向绑定-->
  <el-form label-width="60px" :rules="rules" :model="account">
    <!-- prop 用来匹配 rules 规则的 -->
    <el-form-item label="手机" prop="phone">
      <el-input v-model="phone.name" />
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
import { defineComponent, reactive } from 'vue'
// 编写好规则，e-plus是默认集成async-validator这个库的
// 这里可以抽取到单独的配置文件里面
import { rules } from '../config/phone-config'
export default defineComponent({
  setup() {
    const phone = reactive({
      phone: '',
      checkCode: ''
    })

    return {
      phone,
      rules
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

