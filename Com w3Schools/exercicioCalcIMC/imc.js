const resultado = document.getElementById('resultado')
const calcular = document.getElementById('calcular')

function imc() {
    const nome = document.querySelector('#nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const valorIMC = (peso / (altura**2)).toFixed(1)
    let classificacao = ''

    if(nome !== '' && altura !== '' && peso !== '') {
        if(valorIMC < 18.5) {
            classificacao = 'abaixo do peso'
        } else if(valorIMC < 25) {
            classificacao = 'com o peso ideal'
        }else if(valorIMC < 30) {
            classificacao = 'levemente acima do peso'
        }else if(valorIMC < 35) {
            classificacao = 'com obesidade grau I'
        }else if(valorIMC < 40) {
            classificacao = 'com obesidade grau II'
        }else {
            classificacao = 'com obesidade grau III(cuidado)!'
        }
        resultado.innerHTML = `${nome} seu IMC é ${valorIMC} você está ${classificacao}`
    }else {
        resultado.textContent = 'Preencha os campos'
    }
}


calcular.addEventListener('click', imc)
