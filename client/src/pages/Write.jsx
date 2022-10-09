import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const Write = () => {

  const [value, setValue] = useState('');

  return (
    <div className='newwrite'>
      <div className="content">
        <input type="text" placeholder='Titulo' />
        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span><b> Estado: </b> Borrador </span>
          <span><b> Visibilidad: </b> Publico </span>
          <input style={{ display: "none" }} type="file" name='' id='file' />
          <label className='file' htmlFor="file">Escoge una imagen</label>
          <div className="buttons">
            <button>Guardar como borrador</button>
            <button>Actualizar</button>
          </div>
        </div>
        <div className="item">
          <h1>Categoria</h1>
          <div className='cat'>
            <input type="radio" name="category" value="art" id='art' />
            <label htmlFor="art">Arte</label>
          </div>
          <div className='cat'>
            <input type="radio" name="category" value="ciencia" id='ciencia' />
            <label htmlFor="art">Ciencia</label>
          </div>
          <div className='cat'>
            <input type="radio" name="category" value="tecnologia" id='tecnologia' />
            <label htmlFor="art">Tecnologia</label>
          </div>
          <div className='cat'>
            <input type="radio" name="category" value="cine" id='cine' />
            <label htmlFor="art">Cine</label>
          </div>
          <div className='cat'>
            <input type="radio" name="category" value="diseño" id='diseño' />
            <label htmlFor="art">Diseño</label>
          </div>
          <div className='cat'>
            <input type="radio" name="category" value="comida" id='comida' />
            <label htmlFor="art">Comida</label>
          </div>
        </div>
      </div>
    </div>
  )
}
