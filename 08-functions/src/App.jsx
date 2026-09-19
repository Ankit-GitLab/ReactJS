import React from 'react'


const App = () => {

  function inputChange(){
    console.log('User is Typing');
    
  }

  return (
    <div>
      <button onClick={function(){
        console.log('hello guys');
        
      }}>Click here</button>

      <input onChange={inputChange} type="text" placeholder='Enter name' />


    </div>
  )
}

export default App