import { ofType } from 'redux-observable'
import { asyncScheduler, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map, mergeMap, switchMap, throttleTime, withLatestFrom } from 'rxjs/operators'

import * as CalculatorActions from './actions'
import * as CalculatorState from './state'

export const updateResult = (action$) =>
  action$.pipe(
    ofType(CalculatorActions.CALCULATOR_INPUT_UPDATE),
    throttleTime(125, asyncScheduler, { leading: false, trailing: true }),
    switchMap(({ value }) =>
      ajax
        .post('/api/calculator', { value })
        .pipe(map(({ response }) => ({ type: CalculatorActions.CALCULATOR_RESULT_UPDATE, value: response })))
    )
  )

export const updateExpressionFromClick = (action$, state$) =>
  action$.pipe(
    ofType(CalculatorActions.CALCULATOR_BUTTON_CLICK),
    withLatestFrom(state$),
    mergeMap(([{ value }, state]) =>
      of({
        type: CalculatorActions.CALCULATOR_INPUT_UPDATE,
        value: `${CalculatorState.getExpression(state)}${value}`,
      })
    )
  )
