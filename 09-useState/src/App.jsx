import React from 'react'
import { useState } from 'react'

const App = () => {

  // const [num, setNum] = useState(0)

  // function increaseNum(){
  //   setNum(num+1)
  // }

  //  function decreaseNum(){
  //   setNum(num-1)
  // }

  const [num, setNum] = useState({user:'Aryan' , id: 20})

  const [arr, setarr] = useState([10,20,30]);

  function setArr() {
    const newArr = [...arr];
    newArr.push(40);
    setarr(newArr);
}

  function changeNum(){
    const newNum = {num}
    newNum.user = 'Vanshika'
    newNum.id = 21
    setNum(newNum);
  }
  return (
    <div>
      <h1>{num.user} , {num.id}</h1>
      <h1>{arr}</h1>
      <button onClick={changeNum} >Clicke here</button>
      {/* <button onClick={decreaseNum}>Decrease</button>
      <button onClick={increaseNum}>Increase</button> */}
    </div>
  )
}

export default App
