window.addEventListener('load', () => {
  // variables
  const canvas = document.getElementsByTagName('canvas')[0]
  const context = canvas.getContext('2d')
  let painting = false
  const red = document.getElementsByClassName('red')[0]
  const orange = document.getElementsByClassName('orange')[0]
  const yellow = document.getElementsByClassName('yellow')[0]
  const green = document.getElementsByClassName('green')[0]
  const blue = document.getElementsByClassName('blue')[0]
  const indigo = document.getElementsByClassName('indigo')[0]
  const violet = document.getElementsByClassName('violet')[0]
  const black = document.getElementsByClassName('black')[0]
  const eraser = document.getElementsByClassName('eraser')[0]
  const thinLine = document.getElementsByClassName('thin-line')[0]
  const middleLine = document.getElementsByClassName('middle-line')[0]
  const thickLine = document.getElementsByClassName('thick-line')[0]

  // canvas size 
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  // functions
  function startDrawing() {
    painting = true
    startDrawingAtThisPosition(event)
  }

  function stopDrawing() {
    painting = false
    context.beginPath()
  }

  function startDrawingAtThisPosition(event) {
    if (painting == true) {
      context.lineCap = 'round'
      context.lineTo(event.x, event.y)
      context.stroke()
    }
  }

  function changeStrokeColorToRed() {
    context.strokeStyle = 'red'
  }

  function changeStrokeColorToOrange() {
    context.strokeStyle = 'orange'
  }

  function changeStrokeColorToYellow() {
    context.strokeStyle = 'yellow'
  }

  function changeStrokeColorToGreen() {
    context.strokeStyle = 'lime'
  }

  function changeStrokeColorToBlue() {
    context.strokeStyle = 'blue'
  }

  function changeStrokeColorToIndigo() {
    context.strokeStyle = 'indigo'
  }

  function changeStrokeColorToViolet() {
    context.strokeStyle = 'violet'
  }

  function changeStrokeColorToBlack() {
    context.strokeStyle = 'black'
  }

  function eraseDrawing() {
    context.lineWidth = 50
    context.strokeStyle = 'white'
  }

  function changeLineWidthToThin() {
    context.lineWidth = 1
  }

  function changeLineWidthToMiddle() {
    context.lineWidth = 5
  }

  function changeLineWidthToThick() {
    context.lineWidth = 10
  }

  // event listeners
  canvas.addEventListener('mousemove', startDrawingAtThisPosition)
  canvas.addEventListener('mousedown', startDrawing)
  canvas.addEventListener('mouseup', stopDrawing)
  red.addEventListener('click', changeStrokeColorToRed)
  orange.addEventListener('click', changeStrokeColorToOrange)
  yellow.addEventListener('click', changeStrokeColorToYellow)
  green.addEventListener('click', changeStrokeColorToGreen)
  blue.addEventListener('click', changeStrokeColorToBlue)
  indigo.addEventListener('click', changeStrokeColorToIndigo)
  violet.addEventListener('click', changeStrokeColorToViolet)
  black.addEventListener('click', changeStrokeColorToBlack)
  eraser.addEventListener('click', eraseDrawing)
  thinLine.addEventListener('click', changeLineWidthToThin)
  middleLine.addEventListener('click', changeLineWidthToMiddle)
  thickLine.addEventListener('click', changeLineWidthToThick)
})
