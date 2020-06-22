import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'

import { CalculatorEpics, CalculatorReducer, CalculatorState } from './calculator'

const rootReducer = combineReducers({
  [CalculatorState.stateKey]: CalculatorReducer,
})
const rootEpic = combineEpics(CalculatorEpics.updateResult, CalculatorEpics.updateExpressionFromClick)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const epicMiddleware = createEpicMiddleware()
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)))
epicMiddleware.run(rootEpic)

export default store
