import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const loading = ref(false)

  async function login(email: string, password: string) {
    loading.value = true
    try {
      // Simulate API call - replace with real authentication
      await new Promise(resolve => setTimeout(resolve, 1000))
      user.value = { email }
      navigateTo('/chat')
    } catch (error) {
      throw new Error('Login failed')
    } finally {
      loading.value = false
    }
  }

  function logout() {
    user.value = null
    navigateTo('/login')
  }

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: computed(() => !!user.value)
  }
})