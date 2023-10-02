import './footer.css'

import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'

function Footer() { 

  return (
    <>
      <div className='footer'>
        <div className='zonaBotones'>
            
            <button className="boton bFlecha"><AiOutlineArrowLeft/></button>
            <button className="boton D">1</button>
            <button className="boton D">2</button>
            <button className="boton D">3</button>
            <button className="boton D">4</button>
            <button className="boton D">5</button>
            <button className="boton D">10</button>
            <button className="boton bFlecha"><AiOutlineArrowRight/></button>
            
        </div>
      </div>
    </>
  )
}

export default Footer
