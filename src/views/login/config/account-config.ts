export const rules = {
  // 注意：这个name和password的名字要和实际表单绑定的 prop 一样，因为它就是根据这个来匹配规则的
  name: [
    {
      required: true,
      message: '用户名为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10个字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3位以上的字母或数字',
      trigger: 'blur'
    }
  ]
}
