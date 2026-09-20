import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState({user:'Ankit', age:20})

  const btnClicked=() => {
    const newNum = {...num}
    newNum.user = 'moto'
    setnum(newNum)
  }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App