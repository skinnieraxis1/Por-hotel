import './header.css'
import hotelFondo from '../assets/hotelFondo.jpg'
import porhotelLogo from '../assets/porHotelLogo.png'

function Header() { 

  return (
    <>
      <div className='header'>
        <div className='zonaImgFondo'>
            <img className='imgFondo' src={hotelFondo} alt="" />
        </div>
        <div className='logoCentral'>
          <img className='logoHeader' src={porhotelLogo} alt="" />
        </div>
      </div>
    </>
  )
}

export default Header
