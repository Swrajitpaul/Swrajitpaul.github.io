import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', component: HomeView, meta: { title: 'Home' } },
    { path: '/about', component: () => import('../views/AboutMeView.vue'), meta: { title: 'About Me' } },
  ],
})

router.afterEach((to) => {
  document.title = to.meta?.title ? `${to.meta.title} · Swrajit Paul` : 'Swrajit Paul'
})

export default router
