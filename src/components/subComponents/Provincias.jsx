import './provincias.css'

function Provincias(props) { 

  return (
    <>
      <div className='provincias'>
        <a className='aP' href={props.href}>{props.nombre}</a>
      </div>
    </>
  )
}

export default Provincias
