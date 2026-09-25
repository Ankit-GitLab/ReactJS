import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')
  const [city, setCity] = useState('')

  const [user, setUser] = useState(null)

  // SET ITEM
  const saveUser = () => {

    const userData = {
      username: username,
      age: age,
      city: city
    }

    localStorage.setItem('user', JSON.stringify(userData))

    setUser(userData)

    console.log('User saved:', userData)
  }

  // GET ITEM
  const getUser = () => {

    const data = localStorage.getItem('user')

    if (data) {
      const userData = JSON.parse(data)

      setUser(userData)

      console.log('User:', userData)
    } else {
      alert('No user found!')
    }
  }

  // REMOVE ITEM
  const removeUser = () => {

    localStorage.removeItem('user')

    setUser(null)

    console.log('User removed')
  }

  return (
    <div>

      <h1>LocalStorage User Manager</h1>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <br /><br />

      <div className='button'>
        <button onClick={saveUser}>
        Save User
      </button>

      <button onClick={getUser}>
        Get User
      </button>

      <button onClick={removeUser}>
        Remove User
      </button>
      </div>

      <hr />

      {user && (
        <div>
          <h2>User Details</h2>

          <p>Username: {user.username}</p>
          <p>Age: {user.age}</p>
          <p>City: {user.city}</p>
        </div>
      )}

    </div>
  )
}

export default App