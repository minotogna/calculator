import React, { useLayoutEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { CalculatorActions, useCalculatorExpression } from '@webapp/store/calculator'

import style from './input.scss'
import allowedKeys from './allowedKeys'

const Input = () => {
  const dispatch = useDispatch()
  const inputRef = useRef(null)
  const expression = useCalculatorExpression()

  useLayoutEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <input
      className={style.input}
      type="text"
      ref={inputRef}
      value={expression}
      onChange={(event) => {
        const { value } = event.target
        dispatch(CalculatorActions.updateExpression(value))
      }}
      onKeyDown={(event) => {
        const { key } = event
        if (allowedKeys.indexOf(key) < 0) {
          event.preventDefault()
        }
      }}
    />
  )
}

export default Input
