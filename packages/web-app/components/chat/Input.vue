<template>
  <form @submit.prevent="emit('send', input)" class="flex gap-2">
    <UTextInput
      v-model="input"
      :loading="loading"
      :disabled="loading"
      placeholder="Type your message..."
      class="flex-1"
      @keyup.enter="emit('send', input)"
    />
    <UButton
      type="submit"
      color="primary"
      :loading="loading"
      :disabled="loading || !input.trim()"
    >
      Send
    </UButton>
  </form>
</template>

<script setup lang="ts">
const props = defineProps<{
  loading: boolean
}>()

const emit = defineEmits<{
  send: [message: string]
}>()

const input = ref('')

watch(() => props.loading, (newVal) => {
  if (!newVal) {
    input.value = ''
  }
})</script>