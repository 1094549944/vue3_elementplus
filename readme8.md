# svg 封装

## 安装插件
// 1、先执行这条命令
pnpm add fast-glob -D
// 2、再执行这条命令
pnpm add  vite-plugin-svg-icons -D

## 创建文件
src
    ->components
        ->svgIcon
            index.vue
## main.ts 中引入

```
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入svg
import 'virtual:svg-icons-register'
import SvgIcon from './components/svgIcon/index.vue'

// 引入我们导出的 router 
import { setupRouter } from '@/router/index.ts'
console.log(setupRouter)
const setupApp = async () => {
    const app = createApp(App);
    // 创建路由
    setupRouter(app);
    app.use(SvgIcon).mount('#app');
  };
  
  setupApp();


```

## vite.config.ts 配置
代码如下：
```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 以下三项引入是为配置Element-plus自动按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// svg plugin
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// 使用 @ 代替/src
import{ resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
      // 以下两项是为配置Element-plus自动按需导入
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      // 修改 svg 相关配置
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹内
        iconDirs:[path.resolve(__dirname,'./src/assets/svg')]
      })
  ],
  resolve:{
    alias:[{
      find:'@',
      replacement:resolve(__dirname,'./src')
    }]
  }
})

```


## 使用
src
    ->views
        ->test
            index.vue
<script lang="ts" setup></script>
<template>
  <div>
	  <svg-icon icon-class="upload" />
    <svg-icon icon-class="home" />
    <svg-icon icon-class="drag" />
    <svg-icon icon-class="search" />
  </div>
</template>

## 执行结果
![alt text](1709796967687.png)