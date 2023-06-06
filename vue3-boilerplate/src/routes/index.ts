import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { loginRoute } from './module/auth'
import { homeRoute } from './module/home'


const routes: RouteRecordRaw[] = [loginRoute, homeRoute]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router
