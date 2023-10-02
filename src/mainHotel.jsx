import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import CuerpoHotel from './components/CuerpoHotel'
import './indexHotel.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CuerpoHotel/>
    <Navbar />
  </React.StrictMode>,
)
