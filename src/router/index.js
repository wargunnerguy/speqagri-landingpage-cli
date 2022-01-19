import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from "@/pages/MainPage";
import JobOffers from "@/pages/JobOffers";
import NotFound from "@/pages/NotFound";
import CalculatorPage from "@/pages/CalculatorPage";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobOffers
  },
  {
    path: '/calc',
    name: 'Calculator',
    component: CalculatorPage
  },
  {
    path: '/:notFound(.*)',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
