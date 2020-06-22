import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

function renderApp() {
  ReactDOM.render(
    <BrowserRouter>
      <div>Welcome!</div>
    </BrowserRouter>,
    document.getElementById('main')
  )
}

renderApp()
