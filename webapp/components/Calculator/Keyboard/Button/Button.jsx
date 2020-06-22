import React from 'react'
import PropTypes from 'prop-types'

import style from './button.scss'

const Button = (props) => {
  const { char } = props

  return (
    <button className={style.button} type="button" onClick={() => {}}>
      {char}
    </button>
  )
}

Button.propTypes = {
  char: PropTypes.string.isRequired,
}

export default Button
