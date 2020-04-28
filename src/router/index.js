import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeScreen from '../views/HomeScreen.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { 
      title: "Amikom Zero",
      depth: 0
    },
    component: HomeScreen
  },
  {
    path: '/profil',
    name: 'Profil',
    meta: { 
      title: "Profil Saya | Amikom Zero",
      depth: 1
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileScreen.vue'),
    // children: [{
      // path: 'edit',
      // name: 'Edit Profile',
      // component: () => import('../views/EditProfileScreen.vue'),
    // }]
  },
  {
    path: '/profil/edit',
    name: 'Edit',
    meta: { 
      title: "Edit Profil | Amikom Zero",
      depth: 2
    },
    component: () => import('../views/DuhScreen.vue'),
  },
  {
    path: '/jadwal',
    name: 'Jadwal',
    meta: { 
      title: "Jadwal | Amikom Zero",
      depth: 1
    },
    component: () => import('../views/DuhScreen.vue'),
  },
  {
    path: '/khs',
    name: 'KHS',
    meta: { 
      title: "KHS | Amikom Zero",
      depth: 1
    },
    component: () => import('../views/DuhScreen.vue'),
  },
  {
    path: '/krs',
    name: 'KRS',
    meta: { 
      title: "KRS | Amikom Zero",
      depth: 1
    },
    component: () => import('../views/DuhScreen.vue'),
  },
  {
    path: '/transkip',
    name: 'Transkip',
    meta: { 
      title: "Transkip Nilai | Amikom Zero",
      depth: 1
    },
    component: () => import('../views/DuhScreen.vue'),
  },
  {
    path: '/tentang',
    name: 'Tentang',
    meta: {
      title: "Tentang Aplikasi | Amikom Zero",
      depth: 1
    },
    component: () => import('../views/AboutScreen.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
