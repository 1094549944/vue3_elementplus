# 页面切换进度条
## 安装
npm i nprogress --save

## 配置
src
    ->utils
        ->nprogress.ts
代码如下：
```
// /src/utils/nprogress.ts
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//全局进度条的配置
NProgress.configure({
	easing: 'ease', // 动画方式
	speed: 300, // 递增进度条的速度
	showSpinner: false, // 是否显示加载ico
	trickleSpeed: 200, // 自动递增间隔
	minimum: 0.3, // 更改启动时使用的最小百分比
	parent: 'body' //指定进度条的父容器
});

// 打开进度条
export const start = () => {
	NProgress.start();
};

// 关闭进度条
export const close = () => {
	NProgress.done();
};


```

## 在路由守卫中配置
代码如下：
```
import type { App } from 'vue'
// 引入 nprogress 相关方法
import { close, start } from '@/utils/nprogress'
// 引入 login.ts
import LoginRouter from './modules/login'
// 引入 test.ts
import TestRouter from './modules/test'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export const publicRoutes: Array<RouteRecordRaw> = [
	...LoginRouter,
	...TestRouter,
	{
		path: '/home',
		name: 'homeIndex',
		component: () => import('@/views/home/index.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes: publicRoutes
})

// 路由前置守卫

router.beforeEach(()=>{
	// 开启进度条
	start()
})

// 路由后置守卫
router.afterEach(()=>{
	// 关闭进度条
	close()
})

/* 初始化路由表 */
export function resetRouter() {
	router.getRoutes().forEach((route) => {
		const { name } = route
		if (name) {
			router.hasRoute(name) && router.removeRoute(name)
		}
	})
}
/* 导出 setupRouter */
export const setupRouter = (app: App<Element>) => {
	app.use(router)
}


```
