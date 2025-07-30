import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cards from './components/cards.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Cards title="This is card 1" imgSrc="https://images.pexels.com/photos/18148937/pexels-photo-18148937.jpeg" />
        <Cards title="This is card 2" imgSrc="https://images.pexels.com/photos/13976270/pexels-photo-13976270.jpeg" />
  </StrictMode>,
)
