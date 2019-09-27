import React, { useEffect } from 'react'
import styled from 'styled-components'

// Components
import PartyTime from './PartyTime'

const App = styled.div`
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

const Home = () => {
  useEffect(() => {
    PartyTime()
  })

  return (
    <App>
      <canvas />
    </App>
  )
}

export default Home
