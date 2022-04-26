import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../components/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    redirect: {name: 'Accueil'},
  },
  {
    path: '/home',
    name: 'Accueil',
    component: HomeView
  },
  {
    path: '/suppliers',
    name: 'Liste',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/SupplierList.vue')
  },
  {
    path: '/map',
    name: 'Carte',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/SupplierMap.vue')
  },
  {
    path: '/supplier',
    name: 'Fournisseur',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/SupplierView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
