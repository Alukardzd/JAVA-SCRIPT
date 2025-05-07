//Enunciado:
//Escreva um programa que recebe uma palavra como entrada e conta quantas vogais ela possui.

function contarVogais(nome){
    nome = toString(nome)
    let numVogais = 0;
    const vogais = 'AEIOUaeiou';

    for(let i = 0; i < nome.lenght; i++){
        if(vogais.includes(nome[i])){
            numVogais++
        }
    }
    return numVogais;
}
console.log(contarVogais('Palavra'))