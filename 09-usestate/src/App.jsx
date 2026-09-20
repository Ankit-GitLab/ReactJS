import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)

  function increaseNum(){
    setnum(num+1);
  }

  function decreaseNum(){
    setnum(num-1);
  }

  function jumpBy5(){
    setnum(num+5);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jumpBy5}>jumpBy5</button>
    </div>
  )
}

export default App