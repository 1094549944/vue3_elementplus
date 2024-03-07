export default [
    {
      path: '/test',
      name: 'testIndex',
      component: () => import('@/views/test/index.vue'),
      meta: {
        title: '测试页面'
      }
    }
  ];
  
  