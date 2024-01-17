import './assets/main.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const Home = { template: './pages/Home.vue' }
const Favorites = { template: './pages/Favorites.vue' }

const routes = [
  { path: '/', component: Home },
  { path: '/favorites', component: Favorites }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app')
