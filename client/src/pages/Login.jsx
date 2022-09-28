import React from 'react'
import { Link } from 'react-router-dom'


export const Login = () => {
  return (
    <div className='auth'>
        <h1>Iniciar seccion</h1>
        <form>
            <input required type="text" placeholder='Usuario' />
            <input required type="password" placeholder='Contraseña' />
            <button>Iniciar seccion</button>
            <p>Valida tu usuario o contraseña!</p>
            <span>¿No tienes cuenta? <Link to="/register">Pues creala</Link>  </span>
        </form>
    </div>
  )
}
