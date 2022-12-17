export const rules = {
  phone: [
    {
      required: true,
      message: '手机号为空',
      trigger: 'blur'
    },
    {
      // pattern: /^[]{1,10}$/,
      // message: '手机号必须是1-11个数字',
      // trigger: 'blur'
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
