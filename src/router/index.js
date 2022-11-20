import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Jobs from '../views/JOBS/Jobs.vue'
import JobDetail from '../views/JOBS/JobDetail.vue'
import Error404 from '../views/Error404.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/SignUp',
    name: 'signup',
    component:()=>import('../views/Signup.vue')
  },
  {
    path: '/Jobs',
    name: 'job',
    component: Jobs,
  },
  {
    path: '/JobDetail/:id',
    name: 'jobdetail',
    component: JobDetail,
    props:true,
  },
  {
    path:'/:catchAll(.*)',
    component:Error404,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
