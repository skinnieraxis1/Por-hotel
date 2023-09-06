import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Cuerpo from './components/Cuerpo'
import Header from './components/Header'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Cuerpo />
    <Navbar />
  </React.StrictMode>,
)
