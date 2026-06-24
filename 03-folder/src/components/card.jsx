import React from 'react'

const card = (props) => {
  return (
    <div>
       <div className='card'>
        <img src="https://plus.unsplash.com/premium_vector-1775278648977-626416b8693a?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxpbGx1c3RyYXRpb25zLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"></img>
       <h1>{props.user},{props.age}</h1>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
       <button>View Profi  le</button>
     </div>
    </div>
  )
}

export default card
