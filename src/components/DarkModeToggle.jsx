import { FaMoon, FaSun } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

const DarkModeToggle = () => {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      type="button"
      onClick={toggleTheme}
      className="btn btn-sm ms-3"
      aria-label="Toggle dark mode"
      style={{
        borderColor: '#ec4899',
        color: darkMode ? '#fff' : '#ec4899',
        background: darkMode ? '#ec4899' : 'transparent',
        borderRadius: '10px',
        border: '2px solid #ec4899',
      }}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </motion.button>
  )
}

export default DarkModeToggle
