let num = document.getElementById('txtn')
let lista = document.querySelector('#selc')
let res = document.querySelector('#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('ERROR, Valor invalido ou ja encontrado na lista.')
    }
num.value = ''
num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    }else {
        let maior = valores[0]
        let menor = valores[0]
        let media = 0
        let soma = 0
        let tot = valores.length
        for(let pos in valores) {
            soma += valores[pos]
            media += valores[pos] / tot
            if(valores[pos] > maior) {
                maior = valores[pos]
            }else if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos, ${tot} valores adicionados.</p>`
        res.innerHTML += `<p>O maior número do Array é ${maior}</p>`
        res.innerHTML += `<p>O menor número do Array é ${menor}</p>`
        res.innerHTML += `<p>A soma do Array é de ${soma}</p>`
        res.innerHTML += `<p>A média do Array é de ${media}</p>`
    }
}