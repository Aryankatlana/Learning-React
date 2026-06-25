import React from 'react'
import style from './header.module.css'

const header = () => {
  return (
    <div className={style.header}>
      <h2>I am Header</h2>
      <button>press</button>
    </div>
  )
}

export default header
