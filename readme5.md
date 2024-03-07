# 安装路由
pnpm install vue-router
# 创建页面
在src 下 新建views
src
    ->views
        ->home
            ->index.vue
        ->login
            ->index.vue
        ->test
            ->index.vue

# 创建router 文件夹
src
    ->router
        ->modules
            ->login.ts
            ->test.ts
        ->index.ts
# 在main.ts 中引入
代码如下：
```
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// 引入我们导出的 router 
import { setupRouter } from '@/router'

const setupApp = async () => {
    const app = createApp(App);
    // 创建路由
    setupRouter(app);
    app.mount('#app');
  };
  
  setupApp();

```

# 配置路由出口

将App.vue 中的内容直接替换成
```
<script lang="ts" setup></script>
<template>
	<div>
		<!-- 配置路由出口 -->
		<router-view />
	</div>
</template>
```
# 测试配置
访问页面
http://localhost:5173/#/home

![alt text](1709784924134.png)