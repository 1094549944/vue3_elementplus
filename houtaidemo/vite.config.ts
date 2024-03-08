import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// 以下三项引入是为配置Element-plus自动按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 使用 @ 代替/src
import { resolve } from 'path'

// svg plugin
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// 引入图标
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	// server 配置
	const env = loadEnv(mode, process.cwd())

	return {
		plugins: [
			vue(),
			// 以下两项是为配置Element-plus自动按需导入
			AutoImport({
				// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
				imports: ['vue'],
				resolvers: [
					// 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
					ElementPlusResolver(),
					IconsResolver({
						prefix: 'icon'
					})
				]
			}),
			Components({
				resolvers: [
					// 自动注册图标组件
					IconsResolver({
						enabledCollections: ['ep']
					}),
					// 自动导入 Element Plus 组件
					ElementPlusResolver()
				]
			}),
			Icons({
				autoInstall: true
			}),
			// 修改 svg 相关配置
			createSvgIconsPlugin({
				// 指定需要缓存的图标文件夹
				iconDirs: [resolve(__dirname, './src/assets/svg')]
			})
		],
		resolve: {
			alias: [
				{
					find: '@',
					replacement: resolve(__dirname, './src')
				}
			]
		},
		server: {
			// 服务配置

			// 是否自动打开浏览器
			open: true,
			proxy: {
				'/api': {
					target: env.VITE_BASE_URL, // 代理目标地址
					secure: false, // https
					changeOrigin: true, // 代理时是否改变 origin
					rewrite: (path: string) => path.replace(/^\/api/, '')
				}
			}
		}
	}
})
