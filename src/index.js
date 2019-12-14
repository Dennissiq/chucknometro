import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './routes'
import GlobalStyle from './config/styles/global'

ReactDOM.render(
  <>
    <Routes />
    <GlobalStyle />
  </>,
  document.getElementById('root')
)
