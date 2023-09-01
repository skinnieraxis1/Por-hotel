import './cuerpo.css'
import Provincias from './subComponents/Provincias'
import Hoteles from './subComponents/Hoteles'
import hotelA from '../assets/hotelA.jpg'

function Cuerpo() { 

  return (
    <>
      <div className='cuerpo'>
          <h2 className='subtitle'>
          Hoteles baratos y buenos en Argentina
          </h2>
          <div className='zonaProvincias'>
            <Provincias href="#" nombre="Buenos Aires" />
            <Provincias href="#" nombre="Cordoba" />
            <Provincias href="#" nombre="Salta" />
            <Provincias href="#" nombre="Jujuy" />
            <Provincias href="#" nombre="CABA" />
            <Provincias href="#" nombre="Tierra del Fuego" />
          </div>
          <div className='zonaHoteles'>
            <Hoteles estrellas="5" img={hotelA} />
            <Hoteles estrellas="5" img={hotelA} />
            <Hoteles estrellas="5" img={hotelA} />
          </div>
      </div>
    </>
  )
}

export default Cuerpo
