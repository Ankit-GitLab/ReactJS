import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  let navigate = useNavigate()

  const btnClicked = () =>{
    navigate('/')
  }

  return (
    <div>
      <button className='font-medium bg-emerald-800 px-5 py-2 justify-center rounded m-2 cursor-pointer active:scale-95'
      onClick={btnClicked}
      >Return to home page</button>
        <h1>About Page</h1>
    </div>
  )
}

export default About