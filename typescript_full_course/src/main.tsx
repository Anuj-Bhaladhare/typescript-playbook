import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./typescript_full_course/class_01.ts"
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
