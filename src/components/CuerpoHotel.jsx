import './cuerpoHotel.css'
import ftHotel from '../assets/hotelFt1.jpg'
import {AiFillStar} from 'react-icons/ai'
import {FaSwimmingPool, FaLeaf} from 'react-icons/fa'
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function CuerpoHotel() { 

  return (
    <>
      <div className='cuerpoHotel'>
            <div className='zonaImg'>
                <img className='imgHotel' src={ftHotel} alt="" />
            </div>
            <div className='zonaDer'>
                <h1>Precio por noche </h1>
                <AiFillStar className='estrella'/>
                <AiFillStar className='estrella'/>
                <AiFillStar className='estrella'/>
                <AiFillStar className='estrella'/>
                <AiFillStar className='estrella'/>
                <h2>¿Que Ofrece?</h2>
                <ul>
                    <li><FaSwimmingPool className='icono'/> Pileta de interior</li>
                    <li><FaSwimmingPool className='icono'/>Pileta de exterior</li>
                    <li><FaSwimmingPool className='icono'/>Pileta Climatizada</li>
                    <li><FaLeaf className='icono'/>Spa</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default CuerpoHotel
