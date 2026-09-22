import React from 'react'

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('form submitted');
    
  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}className='flex gap-4 lg:w-1/2 items-start flex-col p-10'>
          <input 
            type="text" 
            placeholder='Enter Notes Heading'
            className='px-5 w-full py-2 font-medium border-2 outline-none rounded' 
            />

            <textarea 
            type="text"
            className='px-5 w-full h-32 py-2 font-medium flex items-start flex-row border-2 outline-none rounded'
            placeholder='Write Details'
            />

            <button className='bg-white font-medium w-full text-black outline-none px-5 py-2 rounded' >Add Notes</button>
      </form>
      <div className='lg:w-1/2 bg-gray-900 p-10'>
      <h1 className='text-3xl font-bold'>Your Notes</h1>
      <div className='flex flex-wrap gap-5 m-5 h-full overflow-auto'>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
      </div>
      </div>
    </div>
  )
}

export default App