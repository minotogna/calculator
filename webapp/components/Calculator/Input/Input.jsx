import React, { useLayoutEffect, useRef } from 'react'

import style from './input.scss'

const Input = () => {
  const inputRef = useRef(null)

  useLayoutEffect(() => {
    inputRef.current.focus()
  }, [])

  return <input className={style.input} type="text" ref={inputRef} />
}

export default Input
