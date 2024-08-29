const ligar = document.getElementById('turnOn')
const desligar = document.getElementById('turnOff')
const img = document.querySelector('img')
const on = document.getElementById('on')


function isLampBroke() {
    return img.src.indexOf('quebrada') > -1
}

function OnOff() {
    if(!isLampBroke()) {
    if(on.textContent == 'Ligar') {
        img.src = 'imagens/ligada.jpg'
        on.textContent = 'Desligar'
    }else if (on.textContent == 'Desligar') {
        img.src = 'imagens/desligada.jpg'
        on.textContent = 'Ligar'
    }
}
}

/*

function turnOn() {
    if (!isLampBroke()){
    img.src = 'imagens/ligada.jpg'
    }
}

function turnOff() {
    if(!isLampBroke()) {
    img.src = 'imagens/desligada.jpg'
    }
}

*/

function broke() {
    img.src = 'imagens/quebrada.jpg'
}




on.addEventListener('click', OnOff)
img.addEventListener('dblclick', broke)
img.addEventListener('mouseout', OnOff)
img.addEventListener('mouseenter', OnOff)
//desligar.addEventListener('click', turnOff)
//ligar.addEventListener('click', turnOn)