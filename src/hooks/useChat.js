import { useCallback } from 'react'
import { useChatContext } from '../contexts/ChatContext'
import { sendMessageToAI } from '../services/aiService'

export const useChat = () => {
  const { messages, inputValue, setInputValue, isLoading, setIsLoading, addMessage, clearChat, exportChat } = useChatContext()

  const sendMessage = useCallback(
    async (customMessage) => {
      const messageToSend = customMessage ?? inputValue.trim()
      if (!messageToSend) return

      const userMessage = { id: Date.now(), role: 'user', content: messageToSend }
      addMessage(userMessage)
      setInputValue('')
      setIsLoading(true)

      try {
        const reply = await sendMessageToAI(messageToSend, messages)
        addMessage({ id: Date.now() + 1, role: 'assistant', content: reply })
      } catch (error) {
        addMessage({
          id: Date.now() + 2,
          role: 'assistant',
          content:
            'I could not generate a response right now. Please try again in a moment or review the educational content in the app.',
        })
      } finally {
        setIsLoading(false)
      }
    },
    [addMessage, inputValue, messages, setInputValue, setIsLoading],
  )

  return { messages, inputValue, setInputValue, isLoading, sendMessage, clearChat, exportChat }
}
