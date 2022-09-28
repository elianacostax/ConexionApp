import React from 'react'
import { Link } from 'react-router-dom'
import 'boxicons';


export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
      <Link to="/" className="logo link">  <div> Conexion </div> </Link>
        <div className="links">
            <Link className='link' to="/?cat=arte"> Arte </Link>
            <Link className='link' to="/?cat=ciencia"> Ciencia </Link>
            <Link className='link' to="/?cat=tecnologia"> Tecnologia </Link>
            <Link className='link' to="/?cat=cine"> Cine </Link>
            <Link className='link' to="/?cat=desing"> Diseño </Link>
            <Link className='link' to="/?cat=comida"> Comida </Link>
            <span>Usuario</span>
            <span className='write'>
              <Link className='link' to="/write"> <box-icon name='message-square-add'></box-icon> </Link>
            </span>
            <span>Salir</span>
        </div>
      </div>
    </div>
  )
}
