import { useEffect, useState } from 'react'

const TypingAnimation = ({ text, speed = 35 }) => {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[index])
      index += 1
      if (index >= text.length) clearInterval(interval)
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return <span>{displayed}</span>
}

export default TypingAnimation
