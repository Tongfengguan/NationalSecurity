import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/NationalSecurity/'),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('@/pages/Dashboard.vue')
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: () => import('@/pages/KnowledgeBase.vue')
    },
    {
      path: '/domain/:id',
      name: 'domain-detail',
      component: () => import('@/pages/DomainDetail.vue'),
      props: true
    }
  ]
})

export default router