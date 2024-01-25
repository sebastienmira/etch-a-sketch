let gridSize=16
let borderWidth=5

const container= document.querySelector('#container')
container.setAttribute('style', 'border-width:5px')

const squareSize=(container.offsetHeight-2*borderWidth)/(gridSize)

for(let i=0; i<gridSize**2; i++){
  const square= document.createElement('div')
  square.classList.add('square')
  square.setAttribute('style', `width: ${squareSize}px; height:${squareSize}px`)
  container.appendChild(square)
}
