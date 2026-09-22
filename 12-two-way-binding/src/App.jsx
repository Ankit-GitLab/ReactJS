import React, { useState } from 'react'

const App = () => {


  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({title, details})  

    setTask(copyTask);

    console.log(task);
    
     

    setTitle('')
    setDetails('')
    
  }


  return (
    <div className='h-screen lg:flex bg-black text-white '>

      <form onSubmit={(e)=>{
        submitHandler(e)
      }}className='flex gap-4 lg:w-1/2 items-start flex-col p-10'>

          <h1 className='text-4xl font-bold'>Add Notes</h1>

          {/* phela input for heading */}
          <input 
            type="text" 
            placeholder='Enter Notes Heading'
            className='px-5 w-full py-2 font-medium border-2 outline-none rounded'
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }} 
            />

            {/* detailed vala input  */}
            <textarea 
              type="text"
              className='px-5 w-full h-32 py-2 font-medium flex items-start flex-row border-2 outline-none rounded'
              placeholder='Write Details Here'
              value={details}
              onChange={(e) => {
                setDetails(e.target.value)
              }}
            />

            <button className='bg-white active:scale-95 font-medium w-full text-black outline-none px-5 py-2 rounded'
            >
              Add Notes
            </button>

      </form>
      <div className='lg:w-1/2 lg:border-l p-10'>
      <h1 className='text-4xl font-bold'>Your Notes</h1>
      <div className='flex flex-wrap gap-5 m-5 h-full overflow-auto'>
        {task.map(function(elem, idx){

          return <div key={idx} className='h-52 w-40 rounded-xl text-black p-4 bg-white'>
            <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
            
            <p>{elem.details}</p>
          </div>

        })}
      </div>
      </div>
    </div>
  )
}

export default App