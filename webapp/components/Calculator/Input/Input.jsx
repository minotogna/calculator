import React, { useLayoutEffect, useRef, useState } from 'react'

import style from './input.scss'

const allowedChars = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '(',
  ')',
  '/',
  '*',
  '-',
  '+',
  '.',
  ' ',
  'ArrowLeft',
  'ArrowRight',
  'Backspace',
  'Delete',
]

const Input = () => {
  const inputRef = useRef(null)
  const [value, setValue] = useState('')
  useLayoutEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <input
      className={style.input}
      type="text"
      ref={inputRef}
      value={value}
      onChange={(event) => {
        setValue(event.target.value)
      }}
      onKeyDown={(event) => {
        const { key } = event
        if (allowedChars.indexOf(key) < 0) {
          event.preventDefault()
        }
      }}
    />
  )
}

export default Input
