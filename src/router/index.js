import { createRouter, createWebHistory } from 'vue-router'

// Import views
const QuestionForm = () => import('../views/QuestionForm.vue')
const SummaryView = () => import('../views/SummaryView.vue')
const MockupGallery = () => import('../views/MockupGallery.vue')
const RoleSimOutput = () => import('../views/RoleSimOutput.vue')

const routes = [
  {
    path: '/',
    name: 'QuestionForm',
    component: QuestionForm
  },
  {
    path: '/summary',
    name: 'SummaryView',
    component: SummaryView
  },
  {
    path: '/mockups',
    name: 'MockupGallery',
    component: MockupGallery
  },
  {
    path: '/ux-spec',
    name: 'RoleSimOutput',
    component: RoleSimOutput
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router