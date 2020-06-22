export const stateKey = 'calculator'

export const keys = {
  expression: 'expression',
  result: 'result',
}

export const initialState = {
  [keys.expression]: '',
  [keys.result]: '',
}

const getState = (state) => state[stateKey]
export const getExpression = (state) => getState(state)[keys.expression]
export const getResult = (state) => getState(state)[keys.result]
