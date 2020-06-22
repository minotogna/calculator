import '@webapp/style/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from '@webapp/store'
import Calculator from '@webapp/components/Calculator'

function renderApp() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Calculator />
      </BrowserRouter>
    </Provider>,
    document.getElementById('main')
  )
}

renderApp()
