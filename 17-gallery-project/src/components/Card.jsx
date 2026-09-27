import React from 'react'

const Card = (prop) => {

    console.log(prop);
    
  return (
    <div>
        <a href={prop.elem.url} target='_blank'>
          <div className='h-40 w-44 bg-white overflow-hidden rounded-xl'>
            <img className='h-full w-full  object-cover' src={prop.elem.download_url} alt="" />
          </div>
        <h2 className='font-bold text-lg'>{prop.elem.author}</h2>
        </a>
    </div>
  )
}

export default Card