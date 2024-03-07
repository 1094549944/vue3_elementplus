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

