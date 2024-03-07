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
    app.component('svg-icon', SvgIcon).mount('#app');
  };
  
  setupApp();
