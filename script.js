let gridSize=16

const container= document.querySelector('#container')
const squareSize=container.offsetHeight/gridSize

for(let i=0; i<gridSize**2; i++){
  const square= document.createElement('div')
  square.classList.add('square')
  square.setAttribute('style', `width: ${squareSize}px; heigth:${squareSize}px`)
  container.appendChild(square)
}
