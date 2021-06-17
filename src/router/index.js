import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Provas from '../views/Provas.vue'
import Alunos from '../views/Alunos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/provas',
    name: 'provas',
    component: Provas
  },
  {
    path: '/alunos',
    name: 'alunos',
    component: Alunos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
