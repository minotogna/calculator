import '@webapp/style/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Calculator from '@webapp/components/Calculator'

function renderApp() {
  ReactDOM.render(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>,
    document.getElementById('main')
  )
}

renderApp()
