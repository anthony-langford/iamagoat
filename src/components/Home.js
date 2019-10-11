import React from 'react'
import styled from 'styled-components'

// Cool stuff
import PartyTime from '../components/PartyTime'
import Synth from './Synth'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #282c34;
  color: white;
`

const Home = () => (
  <Wrapper>
    <Synth />
    <PartyTime />
  </Wrapper>
)

export default Home
