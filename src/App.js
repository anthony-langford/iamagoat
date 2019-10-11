import React from 'react'
import { Router } from '@reach/router'
import styled from 'styled-components'
import Home from './components/Home'

const Wrapper = styled.div`
  text-align: center;
  background-color: #282c34;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const App = () => (
  <Wrapper>
    <Router>
      <Home path="/" />
    </Router>
  </Wrapper>
)

export default App
