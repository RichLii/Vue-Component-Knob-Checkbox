import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import CheckBoxPage from '@/components/CheckBoxPage.vue'
import KnobPage from '@/components/KnobPage.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'

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
  history: createWebHistory(),
  routes
})

export default router
