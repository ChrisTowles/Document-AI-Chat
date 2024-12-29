<template>
  <div class="flex-1 h-screen flex flex-col">
    <div class="flex-1 overflow-y-auto p-8">
      <div v-if="messages.length === 0" class="p-8 text-center text-gray-500">
        Start a conversation by sending a message below.
      </div>
      <ChatMessage
        v-for="(message, index) in messages"
        :key="index"
        :message="message"
      />
    </div>

    <div class="p-4 border-t">
      <ChatInput
        :loading="loading"
        @send="sendMessage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { messages, loading, sendMessage } = useChat()
</script>