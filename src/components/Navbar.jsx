import porhotelLogo from '../assets/porHotelLogo.png'
import { HiMenu, HiOutlineSearch } from 'react-icons/hi';
import './navbar.css'

function Navbar() { 

  return (
    <>
      <div className='navbar'>
        <button className='buttonMenu'><HiMenu className='menu'></HiMenu></button>
        <div className='zonaLogo'>
          <img className='logo' src={porhotelLogo} alt="" />
        </div>
        <div className="zonaSearch">
          <form className="formSearch">
            <input className="inputSearch" type="search" placeholder="Search" aria-label="Search"/>
            <button className="buttonSearch" type="submit"><HiOutlineSearch className='iconSearch'></HiOutlineSearch></button>
          </form>
        </div>
      </div>
      
    </>
  )
}

export default Navbar
