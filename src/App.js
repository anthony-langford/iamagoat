import React from 'react'
import { Router } from '@reach/router'
import Home from './components/Home'

const App = () => (
  <Router>
    <Home path="/" secretCode={'Your mother'} />
  </Router>
)

export default App
