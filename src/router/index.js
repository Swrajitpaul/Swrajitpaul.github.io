import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', component: HomeView, meta: { title: 'Home' } },
    { path: '/about', component: () => import('../views/AboutMeView.vue'), meta: { title: 'About Me' } },
    { path: '/resume', component: () => import('../views/ResumeView.vue'), meta: { title: 'Resume' } },
    { path: '/projects', component: () => import('../views/ProjectsView.vue'), meta: { title: 'Projects' } },
    { path: '/projects/personal', component: () => import('../views/PersonalProjectsView.vue'), meta: { title: 'Personal Projects' } },
    { path: '/projects/college', component: () => import('../views/CollegeProjectsView.vue'), meta: { title: 'College Projects' } },
  ],
})

router.afterEach((to) => {
  document.title = to.meta?.title ? `${to.meta.title} · Swrajit Paul` : 'Swrajit Paul'
})

export default router
