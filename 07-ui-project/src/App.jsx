import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const users = [
  {
    color: '#8B5CF6',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    tag: 'Developer'
  },
  {
    color: '#EC4899',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    tag: 'Designer'
  },
  {
    color: '#3B82F6',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    tag: 'Engineer'
  }
]

const App = () => {
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App