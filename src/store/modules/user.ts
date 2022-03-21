import { defineStore } from 'pinia'
import { login } from '@/api/sys'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'

interface UserState {
  username?: string
  token?: string
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    username: '',
    token: getItem(TOKEN) || '',
  }),
  getters: {},
  actions: {
    setToken(token: string) {
      this.token = token
      setItem(TOKEN, token)
    },
    login(userInfo: any) {
      const { username, password } = userInfo

      return new Promise((resolve, reject) => {
        login({ username, password })
          .then(() => {
            // TODO
            this.setToken('12333')
            router.push('/')
            resolve()
          })
          .catch((error) => {
            this.setToken('12333')
            router.push('/')
            reject(error)
          })
      })
    },
  },
})
