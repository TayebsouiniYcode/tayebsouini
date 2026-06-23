import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView          from '@/views/HomeView.vue'
import ProjectsView      from '@/views/ProjectsView.vue'
import ProjectDetailView from '@/views/ProjectDetailView.vue'

const routes = [
  { path: '/',          name: 'home',           component: HomeView },
  { path: '/projects',  name: 'projects',        component: ProjectsView },
  { path: '/projects/:id', name: 'project-detail', component: ProjectDetailView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash)       return { el: to.hash, behavior: 'smooth', top: 80 }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
