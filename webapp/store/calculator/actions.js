export const CALCULATOR_INPUT_UPDATE = 'calculator/input/update'
export const CALCULATOR_RESULT_UPDATE = 'calculator/expression/update'

export const updateExpression = (value) => ({ type: CALCULATOR_INPUT_UPDATE, value })
