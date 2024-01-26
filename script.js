const container= document.querySelector('#container')
container.setAttribute('style', 'border-width:5px')

let defaultGrid=generateGrid(16)


function generateGrid(gridSize){
  let borderWidth=5
  let squareSize=(container.offsetHeight-2*borderWidth)/(gridSize)
  
  for(let i=0; i<gridSize**2; i++){
    const square= document.createElement('div')
    square.classList.add('square')
    square.setAttribute('style', `width: ${squareSize}px; height:${squareSize}px`)
    container.appendChild(square)
    square.addEventListener('mouseover', ()=>{
      square.classList.toggle('blackSquare')
    })
  }
}

const gridSelector= document.querySelector('#gridSelector')


gridSelector.addEventListener('click', ()=>{
  document.querySelectorAll('.square').forEach((square)=>{
    container.removeChild(square)
  })
  generateGrid(Number(prompt('Enter grid width:')))
})


defaultGrid