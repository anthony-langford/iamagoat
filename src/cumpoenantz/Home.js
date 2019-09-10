import React, { useEffect } from 'react'
import PartyTime from './PartyTime'

const Home = () => {
  useEffect(() => {
    PartyTime()
  })

  return (
    <div className="App">
      <header className="App-header">
        <canvas></canvas>
      </header>
    </div>
  )
}

export default Home
