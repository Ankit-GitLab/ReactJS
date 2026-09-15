import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = () => {
  return (
    <div className='parent'>
      <div className='card'>
      <div>
        <div className='top'>
          <img src="https://logolook.net/wp-content/uploads/2021/06/Symbol-Amazon.png" alt="" />
          <button>Save <Bookmark size={10}/> </button>
        </div>

        <div className='center'>
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>Senior UI/UX Designer</h2>
        </div>
      </div>

        <div className='tag'> 
          <h4>part time</h4>
          <h4>Senior Level</h4>
        </div>

        <div className='bottom'>
          <div>
              <h3>$120/hr</h3>
              <p>Mumbai, India</p>
          </div>
          <button>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default Card