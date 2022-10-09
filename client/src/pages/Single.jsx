import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '../components/Menu'

export const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src='https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' />
        <div className="user">
          <img src=' https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 ' />
          <div className="info">
            <span>Alexa</span>
            <p>Publicado hace 2 dias.</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <box-icon name='message-square-edit' ></box-icon>
            </Link>
            <box-icon name='trash' ></box-icon>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper sem eget odio pretium iaculis.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa augue, finibus eu lectus eget, facilisis efficitur metus. Praesent ac metus id odio posuere mollis. Cras vel maximus erat, sit amet pretium risus. In sit amet enim in ante pulvinar hendrerit. <br />  Aliquam gravida hendrerit dui at consequat. Aliquam sodales fermentum augue eget consequat. Sed et imperdiet tortor. Fusce egestas venenatis augue, in volutpat ex scelerisque sit amet. Vivamus venenatis consectetur massa ultricies venenatis. Maecenas tristique neque sed risus egestas rhoncus. Donec sit amet arcu molestie, dapibus enim non, interdum tellus. Integer sed efficitur neque. <br />
        Duis dignissim sodales nibh, vitae placerat dui tristique non. Ut molestie neque ac urna bibendum pharetra. Curabitur blandit aliquam urna, nec fermentum lectus fermentum eu. Maecenas condimentum quis tortor vitae porta. Mauris vitae semper est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec pulvinar velit ac maximus vehicula. Suspendisse imperdiet, turpis sed blandit mattis, ex ex luctus mi, sed vulputate nulla nibh id felis. Donec pulvinar tincidunt tortor, a hendrerit nibh fermentum et. <br />
        Nullam vulputate varius eros. Aliquam ullamcorper arcu non hendrerit suscipit. Integer mollis at felis a molestie. Duis interdum diam urna, in pulvinar leo tincidunt sed.<br /> Nullam tempus est ac sagittis commodo. Donec mauris lacus, semper vel tincidunt sit amet, scelerisque vel nisi. Donec vitae consectetur enim. Vivamus nec orci eu metus dapibus consequat eu eget metus. Donec metus orci, rutrum quis semper eu, tristique quis ex. Morbi vel pretium lacus. Maecenas placerat lacus nec dui lacinia mollis.
        </p>
      </div>
      <Menu/>
    </div>
  )
}
