import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DEFAULT_PALETTE, applyPalette } from './theme'
import './styles.css'

applyPalette(DEFAULT_PALETTE)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
