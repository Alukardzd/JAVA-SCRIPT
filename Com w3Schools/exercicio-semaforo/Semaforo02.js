const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let totalColor = 0
let intervalID = null

const traficLight = (event) => {
    stopAuto()
    onLight[event.target.id]()
}

const nextColor = () => {
    if(totalColor < 2) {
        totalColor++
    }else{
        totalColor = 0
    }
}

const lightChange = () => {
    const colors = ['green', 'yellow', 'red']
    const color = colors[totalColor]
    onLight[color]()
    nextColor()
    
}

const onLight = {
    'green': () => {img.src = 'imagens/verde.png'},
    'yellow': () => {img.src = 'imagens/amarelo.png'},
    'red': () => {img.src = 'imagens/vermelho.png'},
    'auto': () => intervalID = setInterval(lightChange, 1000)
}

const stopAuto = () => {
    clearInterval(intervalID)
}


buttons.addEventListener('click', traficLight)