import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)

  function increaseNum() {
    setnum(num+1);
  }

  function decreaseNum() {
    setnum(num-1);
  }

  function decrjumpBy5() {
    setnum(num+5);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={decrjumpBy5}>Jump by 5</button>
    </div>
  )
}

export default App 