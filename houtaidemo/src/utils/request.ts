import Axios from 'axios'

import { ElMessage, ElMessageBox } from 'element-plus'

// vite 项目配置中，使用import.meta.env 拿到环境变量
// 参考：https://blog.csdn.net/weixin_45966674/article/details/133861553
// 创建axios 实例
const service = Axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_API, // 从环境中获取url地址，也可写死。
	withCredentials: true, // 跨域时发送cookies是设置为 true
	timeout: 5000 // 超时时间
})

// 请求拦截器
service.interceptors.request.use(
	(config) => {
		// 在发送请求之前做些什么
		console.log(config)
		return config
	},
	(error) => {
		// 对请求错误做些什么
		console.log(error)
		return Promise.reject(error)
	}
)
// 响应拦截器
service.interceptors.response.use(
	(response) => {
		// 对响应数据做点什么
		console.log(response)
		return response
	},
	(error) => {
		// 对响应错误做点什么
		console.log(error)
		return Promise.reject(error)
	}
)

export default service
