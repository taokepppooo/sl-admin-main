import { createApp } from 'vue'
import WujieVue from 'wujie-vue3'
import { setupStore } from '@/store'

import App from './App.vue'
import router from './router'

import 'normalize.css'
import '@/assets/index.less'

// const { bus, setupApp, preloadApp, destroyApp } = WujieVue

const app = createApp(App)

setupStore(app)

app.use(router)
app.use(WujieVue)

app.mount('#app')
