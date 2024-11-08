import { createWebHistory, createRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Cocktail from '@/pages/Cocktail.vue'
import NotFound from '@/pages/NotFound.vue'
import { cocktails } from '@/config/cocktails.ts'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: `/cocktails/${cocktails[0]}` },
  { path: '/cocktails/:cocktailCode', component: Cocktail },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
