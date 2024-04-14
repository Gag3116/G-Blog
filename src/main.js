import './assets/main.css'
import './assets/login&register.css'; // 调整路径以匹配实际路径


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'; // 导入 Vuex store


const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')
