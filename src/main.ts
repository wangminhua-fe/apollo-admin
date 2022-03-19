import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import SvgIcon from '@/components/SvgIcon/index.vue'
// 导入全局样式
import './styles/index.scss'

const app = createApp(App)
app.component('SvgIcon', SvgIcon)
app.use(router)
app.use(createPinia())
app.mount('#app')
