import React from 'react'


const App = () => {


  return (
    <div>
      <button onClick={function(){
        console.log('hello guys');
        
      }}>Click here</button>

      <input onChange={function(elem){
        console.log(elem.target.value);
        
      }}type="text" placeholder='Enter name'/>

      <div onMouseMove={(elem)=>{
          console.log(elem.clientX);
          
      }}className='box'></div>

    </div>
  )
}

export default App