import React from 'react'

export const Menu = () => {
    const posts = [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper sem eget odio pretium iaculis.",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper sem eget odio pretium iaculis. Integer facilisis scelerisque justo at fringilla. Proin ullamcorper rhoncus augue eget volutpat. Aenean ornare luctus tempor. Phasellus in consequat dolor, eu posuere tortor.",
          img: " https://mir-s3-cdn-cf.behance.net/project_modules/disp/6f214f8015843.560b5da113578.jpg "
        },
        {
          id: 2,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper sem eget odio pretium iaculis.",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper sem eget odio pretium iaculis. Integer facilisis scelerisque justo at fringilla. Proin ullamcorper rhoncus augue eget volutpat. Aenean ornare luctus tempor. Phasellus in consequat dolor, eu posuere tortor.",
          img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ba604b8015843.560b5ce07a8eb.jpg "
        },
        {
          id: 3,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper sem eget odio pretium iaculis.",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper sem eget odio pretium iaculis. Integer facilisis scelerisque justo at fringilla. Proin ullamcorper rhoncus augue eget volutpat. Aenean ornare luctus tempor. Phasellus in consequat dolor, eu posuere tortor.",
          img: " https://mir-s3-cdn-cf.behance.net/project_modules/disp/a2246f8015843.560b5cdf841e5.jpg "
        },
        {
          id: 4,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper sem eget odio pretium iaculis.",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper sem eget odio pretium iaculis. Integer facilisis scelerisque justo at fringilla. Proin ullamcorper rhoncus augue eget volutpat. Aenean ornare luctus tempor. Phasellus in consequat dolor, eu posuere tortor.",
          img: " https://mir-s3-cdn-cf.behance.net/project_modules/disp/35c7ca8015843.560b5c7d43f53.jpg "
        },
      ]
  return (
    <div className='menu'>
        <h1>Otros posts que te pueden gustar</h1>
    {
    posts.map(post =>(
        <div className='post' key={post.id}>
        <img src={post.img} alt={post.title} /> 
        <h2> {post.title} </h2>   
        <button>Leer mas</button>
        </div>
    ) )
    }
    </div>
  )
}
