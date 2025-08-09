import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './router/router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './context/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import ThemeProvider from './shared/ThemProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </AuthProvider>
  </ThemeProvider>
  </StrictMode>,
)
