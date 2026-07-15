import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingSpinner from './components/LoadingSpinner'
import { ThemeProvider } from './contexts/ThemeContext'
import { ChatProvider } from './contexts/ChatContext'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from "./pages/Profile";
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'

const HomePage = lazy(() => import('./pages/HomePage'))
const AssistantPage = lazy(() => import('./pages/AssistantPage'))
const DiseasesPage = lazy(() => import('./pages/DiseasesPage'))
const DiseaseDetailPage = lazy(() => import('./pages/DiseaseDetailPage'))
const MedicinesPage = lazy(() => import('./pages/MedicinesPage'))
const VideosPage = lazy(() => import('./pages/VideosPage'))
const NotesPage = lazy(() => import('./pages/NotesPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

const AppRoutes = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><HomePage /></motion.div>} />
        <Route path="/assistant" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><AssistantPage /></motion.div>} />
        <Route path="/diseases" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><DiseasesPage /></motion.div>} />
        <Route path="/diseases/:slug" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><DiseaseDetailPage /></motion.div>} />
        <Route path="/medicines" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><MedicinesPage /></motion.div>} />
        <Route path="/videos" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><VideosPage /></motion.div>} />
        <Route path="/notes" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><NotesPage /></motion.div>} />
        <Route path="/about" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }}><AboutPage /></motion.div>} />
        <Route path="/contact" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><ContactPage /></motion.div>} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <ChatProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <main>
              <Suspense fallback={<LoadingSpinner />}>
                <AppRoutes />
              </Suspense>
            </main>
            <Footer />
          </BrowserRouter>
        </ChatProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
