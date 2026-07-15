import ReactMarkdown from 'react-markdown'
import { FaCopy } from 'react-icons/fa'
import remarkGfm from 'remark-gfm'

const ChatBubble = ({ message }) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(message.content)
    } catch (error) {
      console.error('Copy failed', error)
    }
  }

  const isUser = message.role === 'user'

  return (
    <div className={`d-flex mb-3 ${isUser ? 'justify-content-end' : 'justify-content-start'}`}>
      <div
        className={`card shadow-sm border-0 ${isUser ? 'chat-bubble-user' : 'chat-bubble-assistant'}`}
        style={{ maxWidth: '75%' }}
      >
        <div className="card-body py-2 px-3">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
  {message.content}
</ReactMarkdown>
          {!isUser && (
            <button className="btn btn-link p-0 mt-1" style={{ color: 'var(--rose)' }} onClick={copyToClipboard} aria-label="Copy response">
              <FaCopy />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatBubble
