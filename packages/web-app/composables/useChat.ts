import type { Message, ChatState } from '~/types/chat'

export const useChat = () => {
  const config = useRuntimeConfig()
  const state = useState<ChatState>('chat', () => ({
    messages: [],
    loading: false
  }))

  async function sendMessage(content: string) {
    if (!content.trim() || state.value.loading) return

    state.value.messages.push({
      role: 'user',
      content
    })

    state.value.loading = true

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.openaiApiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content }],
          temperature: 0.7
        })
      })

      const data = await response.json()
      
      state.value.messages.push({
        role: 'assistant',
        content: data.choices[0].message.content
      })
    } catch (error) {
      state.value.messages.push({
        role: 'assistant',
        content: 'Sorry, there was an error processing your request.'
      })
    } finally {
      state.value.loading = false
    }
  }

  return {
    messages: computed(() => state.value.messages),
    loading: computed(() => state.value.loading),
    sendMessage
  }
}