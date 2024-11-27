import '@/ui/assets/main.css'
import '@limonische/vue3-transition-expand/dist/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import globalComponents from './plugins/component-global'
import App from '@/ui/App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(globalComponents)

app.mount('#app')
