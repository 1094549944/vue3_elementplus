# 引入element-plus
参考：
https://element-plus.org/zh-CN/guide/design.html

# 安装
pnpm install element-plus
# 安装icons 
pnpm install element-plus @element-plus/icons-vue
# volar 
因为使用了vscode 的 vetur 插件，所以需要配置一下

在项目的tsconfig.json 中
```
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["element-plus/global"]
  }
}

```
整个tsconfig.json代码：
```
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "types": ["element-plus/global"],
    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

```


vetur 参考：
https://juejin.cn/post/6966106927990308872

# 配置按需自动引入
使用插件 unplugin-vue-components 和 unplugin-auto-import

pnpm install -D unplugin-vue-components unplugin-auto-import

在vite.config.ts 中配置
代码如下：

```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 以下三项引入是为配置Element-plus自动按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'



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
],
})

```
# 验证是否成功

在HelloWorld.vue 中引入
```
		<el-button>Default</el-button>
		<el-button type="primary">Primary</el-button>
		<el-button type="success">Success</el-button>
		<el-button type="info">Info</el-button>
		<el-button type="warning">Warning</el-button>
		<el-button type="danger">Danger</el-button>
	
```
结果：
![alt text](1709723618117.png)