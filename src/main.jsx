import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import SearchProvider from './context/SearchProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <BrowserRouter>
  <SearchProvider>
    <App />
  </SearchProvider>
  </BrowserRouter>
  </StrictMode>,
)
