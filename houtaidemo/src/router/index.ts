import type { App } from 'vue';
// 引入 login.ts
import LoginRouter from './modules/login';
// 引入 test.ts
import TestRouter from './modules/test';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const publicRoutes: Array<RouteRecordRaw> = [
	...LoginRouter,
	...TestRouter,
	{
		path: '/home',
		name: 'homeIndex',
		component: () => import('@/views/home/index.vue')
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes: publicRoutes
});

/* 初始化路由表 */
export function resetRouter() {
	router.getRoutes().forEach((route) => {
		const { name } = route;
		if (name) {
			router.hasRoute(name) && router.removeRoute(name);
		}
	});
}
/* 导出 setupRouter */
export const setupRouter = (app: App<Element>) => {
	app.use(router);
};

