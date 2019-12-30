
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/random_employee',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/random_employee.vue') }
    ]
  },
  {
    path: '/pair_up',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/pair_up.vue') }
    ]
  },     
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
