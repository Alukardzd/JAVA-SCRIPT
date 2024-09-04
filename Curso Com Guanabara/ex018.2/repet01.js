//estrutura de repetição com soma

let num = document.getElementById('num')
let res = document.getElementById('res')
let guardar = document.getElementById('guardar').addEventListener('click', adicionar)
let Somar = document.getElementById('somador').addEventListener('click', somar)
let valores = []

function adicionar() {
    valores.push(Number(num.value))
    num.value = ''
    num.focus()
}

function somar() {
    let soma = 0
    for (let pos in valores) {
        soma += valores[pos]
    }
    res.innerHTML = `A soma é de ${soma}`
}