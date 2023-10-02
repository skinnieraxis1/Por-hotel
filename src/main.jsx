import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Cuerpo from './components/Cuerpo'
import Header from './components/Header'
import Footer from './components/Footer'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Cuerpo />
    <Footer />
    <Navbar />
  </React.StrictMode>,
)
