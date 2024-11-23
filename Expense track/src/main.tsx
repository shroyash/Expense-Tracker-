import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import 'remixicon/fonts/remixicon.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
    <App />
    </Router>
  </StrictMode>,
)
