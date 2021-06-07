
const routes = [


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/',
    component: () => import('pages/landing.vue'),
    name: 'landing'
  },
  {
    path: '/project',
    component: () => import('pages/project.vue'),
    name: 'project'
  }
]

export default routes
