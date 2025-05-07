//"Lista de Números Não Repetidos"
//Enunciado:
//Escreva um programa que leia uma lista de números inteiros (você decide como o usuário vai digitar — pode ser separados por espaço, por exemplo) e crie uma nova lista contendo apenas os números que aparecem uma única vez na lista original, mantendo a ordem original.


let lista = [1,2,3,4,4,4,4]

for(let i = 0; i < lista.length; i++){
    if(lista[i-1].count == lista[i]){
        lista.delete[i]
    }
}
console.log(lista)