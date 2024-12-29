<template>
  <UCard
    :class="[
      'mb-2',
      message.role === 'assistant' ? 'bg-gray-50' : 'bg-white'
    ]"
  >
    <div class="flex gap-4">
      <UAvatar
        :icon="message.role === 'assistant' ? 'i-heroicons-cpu-chip' : 'i-heroicons-user'"
        :class="message.role === 'assistant' ? 'bg-emerald-500' : 'bg-blue-500'"
      />
      <div class="flex-1">
        <p class="text-gray-800 whitespace-pre-wrap">{{ message.content }}</p>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import type { Message } from '~/types/chat'

defineProps<{
  message: Message
}>()</script>