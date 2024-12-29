<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <UCard class="w-full max-w-md">
      <template #header>
        <h1 class="text-2xl font-bold text-center">Login to AI Chat</h1>
      </template>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <UFormGroup label="Email">
          <UInput
            v-model="email"
            type="email"
            placeholder="Enter your email"
            :disabled="loading"
            required
          />
        </UFormGroup>

        <UFormGroup label="Password">
          <UInput
            v-model="password"
            type="password"
            placeholder="Enter your password"
            :disabled="loading"
            required
          />
        </UFormGroup>

        <UButton
          type="submit"
          block
          :loading="loading"
          :disabled="loading"
        >
          Login
        </UButton>
      </form>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const auth = useAuthStore()
const email = ref('')
const password = ref('')
const loading = computed(() => auth.loading)

async function handleLogin() {
  try {
    await auth.login(email.value, password.value)
  } catch (error) {
    // Handle error
  }
}
</script>