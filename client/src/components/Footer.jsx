import React from 'react'
import { Link } from 'react-router-dom'


export const Footer = () => {
  return (
    <footer>
     <div class="grupo1">
                    <div class="box1">
                    <Link to="/" className="logo link">  <div> Conexion </div> </Link>
                    </div>
                    <div class="box">
                        <h2>SOBRE NOSOTROS</h2>
                        <p></p>
                        
                    </div>
                    <div class="box">
                        <h2>REDES</h2>
                        <div class="icon-redes_">
                            <box-icon name='facebook-square' type='logo' className="icon-fb" /> 
                            <box-icon name='instagram' type='logo' className="icon-inst" /> 
                            <box-icon name='whatsapp' type='logo' className="icon-what" /> 
                        </div>
                    </div>
                </div>

                <div class="grupo2">
                    <small> &copy; 2022 <b>By Conexion | </b> Todos los derechos reservados.</small>
                </div>
    </footer>
  )
}
