import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Contaxt from './Component/Contaxt/Contaxt.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Contaxt>
     <App />
   </Contaxt>
  </BrowserRouter>,
)
