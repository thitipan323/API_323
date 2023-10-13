import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WeatherCard from '../components/WeatherCard.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: HomeView
    },
    {
      path: '/WeatherCard/:dt',
      name: 'WeatherCard',
      component: WeatherCard
    }
  
]})

export default router
