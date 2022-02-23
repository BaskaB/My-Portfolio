import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue3-lazyload'

const Vue = createApp(App).use(store).use(router)
Vue.use(VueLazyLoad)

Vue.mount('#app')
