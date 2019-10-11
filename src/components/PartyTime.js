import React, { useEffect } from 'react'

const PartyTime = () => {
  useEffect(() => {
    // setup

    let canvas = document.querySelector(`canvas`)

    function handleResize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.onresize = handleResize

    handleResize()

    let mouse = { x: 400, y: 400 }

    window.onmouseover = event => (mouse = { x: event.clientX, y: event.clientY })

    window.onmousemove = event => (mouse = { x: event.clientX, y: event.clientY })

    // the fun part

    let context = canvas.getContext(`2d`)

    function render(time) {
      time = time % 100000

      canvas.width = canvas.width // eslint-disable-line no-self-assign

      let originX = canvas.width / 2
      let originY = canvas.height / 2

      let dots = mouse.x

      for (let i = 0; i < dots; i += 1) {
        let coordinates = [originX + Math.sin(i) * i, originY + Math.cos(i) * i]

        let radius = (Math.max(0, Math.sin((time * i) / 30000)) * i) / 10

        let angle = [0, Math.PI * 2]

        let hue = (((time / i) * mouse.y) / 150) % 360

        context.beginPath()
        context.arc(...coordinates, radius, ...angle)
        context.fillStyle = `hsl(${hue}, 67%, 51%)`
        context.fill()
      }

      window.requestAnimationFrame(render)
    }

    render()
  })

  return <canvas />
}

export default PartyTime
