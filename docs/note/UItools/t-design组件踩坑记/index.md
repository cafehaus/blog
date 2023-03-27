# t-design组件踩坑记

t-design的t-form用的校验库validator.js不能像iview和element-ui用的校验库 async-validator 一样，直接把自定义校验写在一个规则里面，要单独写一个
```js
  const rules = {
    phone: [
      // {
      //   required: true,
      //   message: '请输入手机号',
     //    validator: validateText
      //   type: 'error',
      //   trigger: 'change',
      // },
      { validator: validateText },
    ],
  }
```