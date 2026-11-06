import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log(
  "%c/%c/%c/ %cBUILD. COMPETE. SHIP.\n%cReBuild '26 · Team Aura farmer · try ↑↑↓↓←→←→BA",
  'color:#111111;font:900 28px Inter,sans-serif',
  'color:#7665ff;font:900 28px Inter,sans-serif',
  'color:#a8e62e;font:900 28px Inter,sans-serif',
  'color:#111111;font:900 18px Inter,sans-serif',
  'color:#777777;font:12px monospace'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
