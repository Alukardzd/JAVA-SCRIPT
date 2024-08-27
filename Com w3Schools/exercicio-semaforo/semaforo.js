const img = document.querySelector('#img')
const buttons = document.getElementById('buttons')
let colorIndex = 0
let intervalID = null
/*function trafficLight(event) {
    console.log(event.target)
    if(event.target.id == 'verde') {
        img.src = 'imagens/verde.png'
    }else if (event.target.id == 'amarelo') {
        img.src = 'imagens/amarelo.png'
    }else if (event.target.id == 'vermelho') {
        img.src = 'imagens/vermelho.png'
    }
    
} */

const trafficLight = (event) => {
    stopAutomatic()
    turnOn[event.target.id]()
}

const nextIndex = () => {
    //Tambem funciona com ternário
    //colorIndex = colorIndex < 2 ? colorIndex++ : 0

    if(colorIndex < 2) {
        colorIndex++
    }else {
        colorIndex = 0
    }
    
}

const changeLight = () => {
    const colors = ['vermelho', 'amarelo', 'verde']
    const color = colors[colorIndex]
    turnOn[color]()
    nextIndex()
    
    
}

const stopAutomatic = () => {
    clearInterval(intervalID)
}

const turnOn = {
    'vermelho': () => img.src = 'imagens/vermelho.png',
    'amarelo': () => img.src = 'imagens/amarelo.png',
    'verde': () => img.src = 'imagens/verde.png',
    'automatico': () => intervalID = setInterval(changeLight, 1000)
}

buttons.addEventListener("click", trafficLight)