import { useEffect, useRef, useState } from 'react'

import './tree-screen-style.css'

export default function TreeScreen() {
  const canvasRef = useRef()
  const [ctx, setCtx] = useState(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    setCtx(canvas.getContext('2d'))
    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  }, [])

  return (
    <div className='tree-screen-container'>
      <h2>This is tree-screen</h2>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}
