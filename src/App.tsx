import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import './App.scss'
// @ts-expect-error - JS module without types
import { useAuthContext } from './hooks/useAuthContext.js'
import Login from './pages/login.tsx'
import Index from './pages/index.tsx'
import CreateAccount from './pages/create-account.tsx'
import ForgotPassword from './pages/forgot-password.tsx'

interface ProtectedRouteProps {
  children: ReactNode
  isAuthenticated: boolean
  isLoading: boolean
}

function ProtectedRoute({ children, isAuthenticated, isLoading }: ProtectedRouteProps) {
  if (isLoading) {
    return <div className="main flex-center">Loading...</div>
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

function App() {
  const { isAuthenticated, loading } = useAuthContext()

  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/index"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isLoading={loading}>
                <Index />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to={isAuthenticated ? '/index' : '/login'} replace />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

