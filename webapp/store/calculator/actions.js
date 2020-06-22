export const CALCULATOR_STATE_RESET = 'calculator/state/reset'
export const CALCULATOR_INPUT_UPDATE = 'calculator/input/update'
export const CALCULATOR_RESULT_UPDATE = 'calculator/expression/update'
export const CALCULATOR_BUTTON_CLICK = 'calculator/button/click'

// input update
export const updateExpression = (value) => ({ type: CALCULATOR_INPUT_UPDATE, value })

// button click
export const buttonClick = (value) => ({ type: CALCULATOR_BUTTON_CLICK, value })

// reset state
export const resetState = () => ({ type: CALCULATOR_STATE_RESET })
