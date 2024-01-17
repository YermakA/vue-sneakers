import './assets/main.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createApp } from 'vue'
const Home = { template: './pages/Home.vue' }
import { VueRouter } from 'vue-router'
import App from './App.vue'

const routes = [
  { path: '/', component: Home }
  //{ path: '/favorites', component: Favorites }
]

const router = VueRouter.createRouter({
  history: VueRouter.creaWebhistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app')
