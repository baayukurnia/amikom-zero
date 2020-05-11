import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeScreen from '../views/HomeScreen.vue'
// import ProfileScreen from '../views/ProfileScreen.vue'

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
      requiresAuth: true,
      title: "Profil Saya | Amikom Zero",
      depth: 1
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileScreen.vue')
    // component: ProfileScreen
  },
  {
    path: '/profil/edit',
    name: 'Edit',
    meta: {
      requiresAuth: true,
      title: "Edit Profil | Amikom Zero",
      depth: 2
    },
    component: () => import('../views/EmangScreen.vue'),
  },
  {
    path: '/qr',
    name: 'Absen QR',
    meta: {
      requiresAuth: true,
      title: "Absen QR | Amikom Zero",
      depth: 1
    },
    component: () => import('../views/QrScreen.vue'),
  },
  {
    path: '/jadwal',
    name: 'Jadwal',
    meta: {
      requiresAuth: true,
      title: "Jadwal | Amikom Zero",
      depth: 1
    },
    component: () => import('../views/ScheduleScreen.vue'),
  },
  {
    path: '/khs',
    name: 'KHS',
    meta: {
      requiresAuth: true,
      title: "KHS | Amikom Zero",
      depth: 1
    },
    component: () => import('../views/DuhScreen.vue'),
  },
  {
    path: '/presensi',
    name: 'Presensi',
    meta: {
      requiresAuth: true,
      title: "Presensi | Amikom Zero",
      depth: 1
    },
    component: () => import('../views/PresenceScreen.vue'),
  },
  {
    path: '/presensi/:krsid',
    name: 'DetailPresensi', 
    meta: {
      requiresAuth: true,
      title: "Detail Presensi | Amikom Zero",
      depth: 2
    },
    component: () => import('../views/PresenceDetailScreen.vue')
  },
  {
    path: '/transkip',
    name: 'Transkip',
    meta: {
      requiresAuth: true,
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
  },
  {
    path: '*',
    name: '404',
    meta: {
      title: "404 Not Found | Amikom Zero",
      depth: 1
    },
    component: () => import('../views/NotFoundScreen.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (localStorage.getItem('user-token') == null) {
      this.$store.dispatch('AUTH_LOGOUT')
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
