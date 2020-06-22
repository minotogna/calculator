import { exportReducer } from '@webapp/store/utils'

import * as CalculatorActions from './actions'
import * as CalculatorState from './state'

const actionHandlers = {
  [CalculatorActions.CALCULATOR_INPUT_UPDATE]: (state, { value }) => ({
    ...state,
    [CalculatorState.keys.expression]: value,
  }),

  [CalculatorActions.CALCULATOR_RESULT_UPDATE]: (state, { value }) => ({
    ...state,
    [CalculatorState.keys.result]: value,
  }),
}

export default exportReducer(actionHandlers, CalculatorState.initialState)
