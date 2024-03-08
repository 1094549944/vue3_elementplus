import request from '@/utils/request'

// 测试获取列表
export function getTestList(data) {
	return request({
		url: '/list',
		method: 'get',
		data
	})
}
