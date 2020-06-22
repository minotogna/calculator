import React from 'react'

import style from './keyboard.scss'
import Button from './Button'

const sequence = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', 'C', '+']

const Keyboard = () => {
  return (
    <div className={style.keyboard}>
      {sequence.map((char) => (
        <Button key={char} char={char} />
      ))}
    </div>
  )
}

export default Keyboard
