import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
// establishes socket connection
import './socket'

ReactDOM.render(
    <Home />,
  document.getElementById('app')
)
