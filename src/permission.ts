import router from '@/router'
import { useUserStore } from '@/store/modules/user'

// 白名单
const whitelist = ['/login', '/404']

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (userStore.token) {
    // 用户已登录，则不允许进入login
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 用户未登录，只允许进入login
    if (whitelist.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
