import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { CalculatorActions } from '@webapp/store/calculator'

import style from './button.scss'

const Button = (props) => {
  const dispatch = useDispatch()
  const { char } = props

  return (
    <button
      className={style.button}
      type="button"
      onClick={() => {
        const action = char === 'C' ? CalculatorActions.resetState() : CalculatorActions.buttonClick(char)
        dispatch(action)
      }}
    >
      {char}
    </button>
  )
}

Button.propTypes = {
  char: PropTypes.string.isRequired,
}

export default Button
