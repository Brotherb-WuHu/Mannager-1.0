export const rules = {
  phone: [
    {
      required: true,
      message: '手机号为空',
      trigger: 'blur'
    },
    {
      pattern: /^[]{10,11}$/,
      message: '手机号必须是10-11个数字',
      trigger: 'blur'
    }
  ],
  checkCode: [
    {
      // required: true,
      // message: '验证码为空',
      // trigger: 'blur'
    }
  ]
}
