/*

Kg / h^2

*/
let peso = 68
let altura = 1.59
let IMC = peso / (altura^2)
console.log(IMC)
if(IMC < 18.5 || IMC > 24.5){
    console.log('Seu peso não está ideal')
}else{
    console.log('Seu peso está ideal')
}

let seu_peso = prompt('qual seu peso?')