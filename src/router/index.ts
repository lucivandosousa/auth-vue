import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const requireAuth = (to: any, from: any, next: any) => {
  const authStore = useAuthStore()
  authStore.checkAuthStatus()

  if (!authStore.isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    beforeEnter: requireAuth,
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})