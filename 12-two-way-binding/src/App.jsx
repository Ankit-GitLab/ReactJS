import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <form className='flex items-start flex-col p-10'>
        <div className='flex gap-4  w-1/2 items-startn flex-col'>
          <input 
            type="text" 
            placeholder='Enter Notes Heading'
            className='px-5 w-full py-2 border-2 outline-none rounded' 
            />

            <input 
            type="text"
            className='px-5 w-full h-20 py-2 border-2 outline-none rounded'
            placeholder='Write Details'
            />

            <button className='bg-white w-full text-black outline-none px-5 py-2 rounded' >Add Notes</button>
        </div>
        <img className='h-50'  src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"alt="" />
      </form>
    </div>
  )
}

export default App