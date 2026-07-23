import React from 'react'

const App = () => {


  //The default behavior of a form is to reload when we submit it
  //Here we prevent reload when submitting form using preventDefault() method
  function submitForm(e){
    e.preventDefault()
    console.log('Form is submitting');
  }

  return (
    <div>
      <form onSubmit={(e) =>{
        submitForm(e)
      }}>
        <input type="text" placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
