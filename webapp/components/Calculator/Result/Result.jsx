import React from 'react'

import { useCalculatorResult } from '@webapp/store/calculator'

import style from './result.scss'

const Result = () => {
  const result = useCalculatorResult()
  return <div className={style.result}>{result}</div>
}

export default Result
