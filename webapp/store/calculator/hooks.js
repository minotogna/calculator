import { useSelector } from 'react-redux'

import * as CalculatorState from './state'

export const useCalculatorExpression = () => useSelector(CalculatorState.getExpression)

export const useCalculatorResult = () => useSelector(CalculatorState.getResult)
