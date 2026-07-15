import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaTrash, FaDownload, FaRobot } from 'react-icons/fa'
import SEO from '../components/SEO'
import { useChat } from '../hooks/useChat'
import ChatBubble from '../components/ChatBubble'
import LoadingSpinner from '../components/LoadingSpinner'
import { useTheme } from '../contexts/ThemeContext'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


const AssistantPage = () => {
  const { messages, inputValue, setInputValue, isLoading, sendMessage, clearChat, exportChat } = useChat()
  const { darkMode } = useTheme()
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const handleSubmit = (event) => {
    event.preventDefault()
    sendMessage()
  }

  return (
    <>
      <SEO title="GynoGuide AI | Assistant" description="Chat with the student learning assistant for women’s health topics and study guidance." keywords="AI assistant, women health, learning assistant" />
      <section className="py-5 section-blush">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="page-title section-heading font-display">Student Learning Assistant</h2>
            <p className="page-subtitle">Ask about diseases, medicines, menstrual health, and more — in a safe, supportive space.</p>
          </div>
          <div className={`rounded-4 shadow-sm p-4 chat-panel ${darkMode ? '' : ''}`}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center gap-2">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px', background: 'var(--gradient-primary)', color: 'white' }}
                >
                  <FaRobot />
                </div>
                <div>
                  <h5 className="fw-bold mb-0 font-display gradient-text">GynoGuide AI</h5>
                  <small className="text-muted">Your caring study companion</small>
                </div>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-rose-soft btn-sm" onClick={exportChat} aria-label="Export chat">
                  <FaDownload />
                </button>
                <button className="btn btn-outline-danger btn-sm rounded-pill" onClick={clearChat} aria-label="Clear chat">
                  <FaTrash />
                </button>
              </div>
            </div>
            <div
              className="rounded-4 p-3"
              style={{
                minHeight: '420px',
                maxHeight: '500px',
                overflowY: 'auto',
                background: darkMode ? 'rgba(15,8,18,0.5)' : 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(236,72,153,0.1)',
              }}
            >
              {messages.map((message) => (
                <ChatBubble key={message.id} message={message} />
              ))}
              {isLoading && <LoadingSpinner />}
              <div ref={bottomRef} />
            </div>
            <div className="mt-3">
              <div className="d-flex flex-wrap gap-2 mb-3">
                {['What is PCOS?', 'Explain Endometriosis.', 'What causes cervical cancer?', 'What is HPV?', 'Explain menstrual cycle.'].map((question) => (
                  <button key={question} className="btn btn-outline-info btn-sm" onClick={() => sendMessage(question)}>
                    {question}
                  </button>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="d-flex gap-2">
                <input
                  className="form-control rounded-pill px-4"
                  placeholder="Type your question..."
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                />
                <motion.button whileTap={{ scale: 0.97 }} className="btn btn-rose rounded-circle d-flex align-items-center justify-content-center" type="submit" style={{ width: '48px', height: '48px' }}>
                  <FaPaperPlane />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AssistantPage
