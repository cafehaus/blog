# 用react和TypeScript开发项目问题记录

绑定事件传参不能像 vue 那样直接传参

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
