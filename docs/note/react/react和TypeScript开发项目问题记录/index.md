# 用react和TypeScript开发项目问题记录

* 类组件继承自 React.component，所以有状态有生命周期，又称动态组件、有状态组件。函数组件只能接收一个 props，是静态组件、无状态组件。
* 组件渲染流程：父组件 componentWillMount -> 父组件 render 【子组件 componentWillMount -> 子组件 render 【】-> 子组件 componentDidMount】-> 父组件 componentDidMount
* 用类组件的 setState 或者 函数组件钩子函数 useState 里的 setXxx 去修改状态时，引用数据类型要自己结构重新定义一个 array、object：[...arr]、{...obj}。因为React中默认为浅监听，当变量为引用类型时，栈中存的是引用（地址），而 setState 改变的是堆中的数据，所以此时set后，栈中的地址还是原来的地址，React会认为 state 并未改变，所以不重新渲染页面。

## 动态设置网站浏览器导航标题

模版文件 index.html 里可以用 <%= 变量名%> 去插入变量，网站的标题 title 可以在路由中动态去设置 document.title 的值，其实直接通过 document.title 设置就生效了，似乎 index.html 中的 <%= title %> 并没有卵用，不知道是不是为了在服务端直接修改 title 的值？

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><%= title %></title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

HTML 代码中<%%>、<%=%>、<%:%>中这类语法，应该是借鉴了后端直接写 html 的模版语法，jsp、ejs...，具体的单独写文章来总结。


## 绑定事件传参不能像 vue 那样直接传参

```ts
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

## 路由表封装
react 的 jsx 要写在 tsx 后缀名的文件里才生效，不能写在 ts 文件里。封装路由表时，为了避免页面闪烁，公共布局组件需要先加载，其他页面路由再用路由懒加载。导入组件时就一直报错，最后才发现文件后缀名是 ts

```ts
// routes.ts
export interface routeType {
  path: string;
  element?: any;
  children?: Array<routeType>;
  meta?: {
    title?: string;
    needLogin?: boolean;
  };
  redirect?: string;
}

import Layout from '@/layout'

const routes: Array<routeType> = [
  {
    path: '/',
    element: <Layout />, // 这里会一直报错，tsx 文件才能这样写
    children: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        element: () => import('@/views/home'),
        meta: {
          title: '首页',
        },
      },
    ],
  },
  {
    path: '*',
    element: () => import('@/components/404'),
    meta: {
      title: '404',
    },
  },
]

export default routes
```

### 标签上绑定属性变量不用加引号

绑定属性变量用花括号 {} 扩起来就行了，不用加引号，注意不要跟 vue 和小程序的语法搞混了
```ts
const Comp = function() {
  return (
    // 错误方式
		// <img className="img" src="{logoImg}" />

    // 正确的方式
		<img className="img" src={logoImg} />
	)
}
export default Comp
```
