/* - Faça um algoritmo que leia o valor de um produto e determine o valor que deve ser pago, conforme a escolha da forma de pagamento

 pelo comprador e imprima na tela o valor final do produto a ser pago. Utilize os códigos da tabela de condições de pagamento para efetuar o cálculo adequado.

 

 Tabela de Código de Condições de Pagamento

 

 1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto

 2 - À Vista no cartão de crédito, recebe 10% de desconto

 3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros

 4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10% */


let produto = 4000


function dinheiro_pix (produto){
    return produto - (produto * 15/100)
}
function cartao(produto){
    return produto - (produto * 10/100)
}
function parcelado2x(produto){
    return produto / 2
}
function parcelado3x(produto){
    return (produto + (produto * 10/100))/2
}
console.log(dinheiro_pix(produto))
console.log(cartao(produto))
console.log(parcelado2x(produto))
console.log(parcelado3x(produto))