import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('gynoguide-theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    document.body.className = darkMode ? 'bg-dark text-light' : ''
    localStorage.setItem('gynoguide-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const value = useMemo(
    () => ({
      darkMode,
      toggleTheme: () => setDarkMode((prev) => !prev),
    }),
    [darkMode],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
