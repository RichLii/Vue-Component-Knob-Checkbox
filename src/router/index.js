import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import CheckBoxPage from '@/views/CheckBoxPage.vue'
import KnobPage from '@/views/KnobPage.vue'
import HeaderComponent from '@/views/HeaderPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: HomePage,
      Header: HeaderComponent
    }
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    components: {
      default: CheckBoxPage,
      Header: HeaderComponent
    }
  },
  {
    path: '/knob',
    name: 'knob',
    components: {
      default: KnobPage,
      Header: HeaderComponent
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
