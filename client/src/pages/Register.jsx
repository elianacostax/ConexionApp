import React from 'react'
import { Link } from 'react-router-dom'


export const Register = () => {
  return (
    <div className='auth'>
        <h1>Crear nueva cuenta</h1>
        <form>
            <input required type="text" placeholder='Usuario' />
            <input required type="email" placeholder='Correo' />
            <input required type="password" placeholder='Contraseña' />
            <button>Registrate</button>
            <p>hay algun error!</p>
            <span>¿Tienes cuenta? <Link to="/login">Pues ingresa</Link></span>
        </form>
    </div>
  )
}
