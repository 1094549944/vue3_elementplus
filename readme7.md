# 页面切换动画
在使用切换动画的时候，尽量保证template 标签下只有一个根节点
## 配置
在App.vue 页面中配置：
```
<template>
   	<!-- 设置路由出口 -->
	<router-view v-slot="{ Component, route }">
		<transition name="animation" mode="out-in">
			<component :is="Component" :key="route.path" />
		</transition>
	</router-view>
</template>
<style lang="scss">
/* 过度动画配置代码 */
.animation-enter-from,
.animation-leave-to {
	transform: translateX(20px);
	opacity: 0;
}
.animation-enter-to,
.animation-leave-from {
	opacity: 1;
}
.animation-enter-active {
	transition: all 0.7s ease;
}
.animation-leave-active {
	transition: all 0.3s cubic-bezier(1, 0.6, 0.6, 1);
}
</style>

```