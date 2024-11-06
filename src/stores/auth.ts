import { defineStore } from "pinia"

export const useAuthStore = defineStore('auth', {
  state() {
    return {
      isAuthenticated: false,
      user: null,
    }
  },
  actions: {
    login(userData: any) {
      this.isAuthenticated = true
      this.user = userData
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('user', JSON.stringify(userData))
    },

    logout() {
      this.isAuthenticated = false
      this.user = null
      localStorage.removeItem('isAuthenticated')
      localStorage.removeItem('user')
    },

    checkAuthStatus() {
      const isAuthenticated = localStorage.getItem('isAuthenticated')
      const storedUser = localStorage.getItem('user')

      if (isAuthenticated === 'true') {
        this.isAuthenticated = true
        this.user = JSON.parse(storedUser)
      } else {
        this.isAuthenticated = false
        this.user = null
      }
    }
  },
})