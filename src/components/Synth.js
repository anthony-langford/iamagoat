import React, { useEffect, useState, useMemo, useCallback } from 'react'
import AudioKeys from 'audiokeys'
import Tone from 'tone'
import { scale } from '@tonaljs/scale'
import { sample } from 'lodash'
import WebMidi from 'webmidi'
import styled from 'styled-components'

import GreetingText from './GreetingText'

const Overlay = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

// TODO: https://tonejs.github.io/examples/jump.html
const Synth = () => {
  const [showGreeting, setShowGreeting] = useState(true)

  let ctx = new AudioContext()
  let keyboard = new AudioKeys()

  // TODO: allow intuitive changing of synth type
  let synth = new Tone.PolySynth(6, Tone.Synth, {
    oscillator: {
      type: 'sine',
    },
  }).toMaster()

  let loop = new Tone.Loop(time => {
    // triggered every eighth note.
    let note = sample(notes)
    // output.playNote(note)
    synth.triggerAttackRelease(note, '8n', time)
  }, '8n')

  const keyPressListener = useCallback(() => {
    setShowGreeting(false)
  }, [])

  const memoizedListener = useMemo(() => keyPressListener, [keyPressListener])

  const enableMidi = () => {
    WebMidi.enable(err => {
      if (err) {
        console.log('WebMidi could not be enabled.', err)
      } else {
        console.log('WebMidi enabled!')
        
        // console.log(WebMidi.inputs)
        // console.log(WebMidi.outputs)

        // let [input] = WebMidi.inputs
        // let [output] = WebMidi.outputs
        // output.playNote("C3");

        Tone.Transport.start()
        loop.start()

        // input.addListener('noteon', 'all', val => {
        //   console.log(val)
        //   let note = val.note.name + val.note.octave
        //   synth.triggerAttackRelease(note, '8n')
        // })
      }

      keyboard.down(handleKeyDown)

      // keyboard.up(function(note) {
      //   // do things with the note object
      // })
    })
  }

  const addListeners = () => {
    window.addEventListener('keydown', memoizedListener)
    window.addEventListener('mousedown', memoizedListener)
  }

  const removeListeners = () => {
    window.removeEventListener('keydown', memoizedListener)
    window.removeEventListener('mousedown', memoizedListener)
  }

  useEffect(() => {
    console.log('Press for 🔊🎉')
    ctx.resume()
    if (showGreeting) {
      addListeners()
    } else {
      removeListeners()
      enableMidi()
    }
  })

  let timer = null

  const handleKeyDown = () => {
    if (loop.state === 'started') {
      loop.stop()
    }

    clearTimeout(timer)
    timer = setTimeout(() => {
      loop.start()
    }, 2000)

    let note = sample(notes)
    synth.triggerAttackRelease(note, '8n')
  }

  let scaleType1 = 'c3 piongio'
  let scaleType2 = 'c4 piongio'

  let { notes: n1 } = scale(scaleType1)
  let { notes: n2 } = scale(scaleType2)
  let notes = [...n1, ...n2]

  return (
    <Overlay
      onClick={() => {
        handleKeyDown()
      }}
      onKeyDown={() => {
        if (showGreeting) setShowGreeting(false)
      }}
    >
      {showGreeting ? <GreetingText>hi</GreetingText> : null}
    </Overlay>
  )
}

export default Synth
