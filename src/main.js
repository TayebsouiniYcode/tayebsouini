import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { vReveal } from './directives/reveal.js'
import './assets/css/style.css'

const app = createApp(App)
app.use(router)
app.directive('reveal', vReveal)
app.mount('#app')
