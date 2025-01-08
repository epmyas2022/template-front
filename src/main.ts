import '@/ui/assets/main.css'
import '@limonische/vue3-transition-expand/dist/style.css'
import 'vue-toastification/dist/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import globalComponents from './plugins/component-global'
import App from '@/ui/App.vue'
import router from './router'
import Toast, { type PluginOptions } from 'vue-toastification'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(globalComponents)
app.use(Toast, {} as PluginOptions)

app.mount('#app')
