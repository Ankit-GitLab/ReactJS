import { X } from 'lucide-react'
import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState('Ankit')
  const [username, setname] = useState('Moto')

  function changeName(){
    setnum('hello, ankit');
  }

  return (
    <div>
      <h1>Value of num is {num} <br /> value of user is {username}</h1>
      <button onClick={changeName}>Click</button>
    </div>
  )
}

export default App