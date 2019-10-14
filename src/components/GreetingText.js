import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  animation: ${rotate} 4s linear infinite;
`

const TextBox = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 24px;
`

const GreetingText = () => (
  <Wrapper>
    <TextBox>Press for</TextBox>
    <span
      style={{
        padding: '0 0 0 8px',
      }}
      role="img"
      aria-label="sound and party"
    >
      🔊🎉
    </span>
  </Wrapper>
)

export default GreetingText
