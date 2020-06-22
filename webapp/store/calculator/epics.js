import { ofType } from 'redux-observable'
import { asyncScheduler } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map, switchMap, throttleTime } from 'rxjs/operators'

import * as CalculatorActions from './actions'

export const updateResult = ($action) =>
  $action.pipe(
    ofType(CalculatorActions.CALCULATOR_INPUT_UPDATE),
    throttleTime(250, asyncScheduler, { leading: false, trailing: true }),
    switchMap(({ value }) =>
      ajax
        .post('/api/calculator', { value })
        .pipe(map(({ response }) => ({ type: CalculatorActions.CALCULATOR_RESULT_UPDATE, value: response })))
    )
  )
