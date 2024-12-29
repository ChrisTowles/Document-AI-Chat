<template>
  <div class="w-64 h-screen bg-gray-50 border-r border-gray-200 p-4 flex flex-col">
    <div class="mb-8">
      <h2 class="text-xl font-semibold text-gray-900">AI Chat</h2>
    </div>
    
    <UButton
      class="mb-4"
      block
      @click="startNewChat"
    >
      <template #leading>
        <UIcon name="i-heroicons-plus" />
      </template>
      New Chat
    </UButton>

    <div class="flex-1 overflow-y-auto">
      <div
        v-for="(chat, index) in recentChats"
        :key="index"
        class="p-2 mb-2 rounded hover:bg-gray-100 cursor-pointer flex items-center gap-2"
      >
        <UIcon name="i-heroicons-chat-bubble-left" />
        <span class="text-sm truncate">{{ chat.title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const recentChats = ref([
  { title: 'Getting started with AI' },
  { title: 'Learning about machine learning' },
  { title: 'Coding assistance' }
])

const startNewChat = () => {
  // TODO: Implement new chat functionality
}
</script>