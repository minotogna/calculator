import React from 'react'
import style from './calculator.scss'

import Input from './Input'
import Result from './Result'
import Keyboard from './Keyboard'

const Calculator = () => {
  return (
    <div className={style.calculator}>
      <Input />
      <Result />
      <Keyboard />
    </div>
  )
}

export default Calculator
