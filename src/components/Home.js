import React, { useEffect } from 'react'

// Cool stuff
import partyTime from '../helpers/partyTime'
import Synth from './Synth'

const Home = () => {
  useEffect(() => {
    partyTime()
  })

  return (
    <>
      <Synth />
      <canvas
        onClick={() => {
          partyTime()
        }}
      />
    </>
  )
}

export default Home
