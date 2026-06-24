import React from 'react'
import Card from './components/card'
const App = () => {
  return (
    <div className='parent'>
     <Card user = 'Aryan ' age={20}/> 
     <Card user = 'Vanshika ' age={21}/> 
    </div>
  )
}

export default App
