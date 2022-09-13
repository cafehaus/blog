# 用react和TypeScript开发项目问题记录

绑定事件传参不能像 vue 那样直接传参

```tsx
const Comp = function() {
    return (
        // 错误方式
		// <span onClick={handleNavigate('我是参数')}>按钮</span>

        // 正确的方式
		<span onClick={() => handleNavigate('我是参数')}>按钮</span>
	)
}
export default Comp
```