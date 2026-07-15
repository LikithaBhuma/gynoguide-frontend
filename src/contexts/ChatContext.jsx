import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ChatContext = createContext()

const starterMessage = {
  id: 1,
  role: 'assistant',
  content:
    'Hello! I am GynoGuide AI. I can help you learn about women\'s health topics, disease basics, medicines, and study notes. Ask me anything about PCOS, endometriosis, cervical cancer, the menstrual cycle, or pregnancy care.',
}

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState(() => {
    if (typeof window === 'undefined') return [starterMessage]
    const stored = localStorage.getItem('gynoguide-chat-history')
    return stored ? JSON.parse(stored) : [starterMessage]
  })
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [suggestedQuestions] = useState([
    'What is PCOS?',
    'Explain Endometriosis.',
    'What causes cervical cancer?',
    'What is HPV?',
    'Explain menstrual cycle.',
  ])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('gynoguide-chat-history', JSON.stringify(messages))
    }
  }, [messages])

  const addMessage = (message) => {
    setMessages((prev) => [...prev, message])
  }

  const clearChat = () => {
    setMessages([starterMessage])
    setInputValue('')
    setIsLoading(false)
  }

  const exportChat = () => {
    const exportText = messages
      .map((message) => `${message.role.toUpperCase()}: ${message.content}`)
      .join('\n\n')

    const blob = new Blob([exportText], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'gynoguide-chat.md'
    link.click()
    URL.revokeObjectURL(url)
  }

  const value = useMemo(
    () => ({
      messages,
      inputValue,
      setInputValue,
      isLoading,
      setIsLoading,
      suggestedQuestions,
      addMessage,
      clearChat,
      exportChat,
    }),
    [messages, inputValue, isLoading, suggestedQuestions],
  )

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

export const useChatContext = () => useContext(ChatContext)
