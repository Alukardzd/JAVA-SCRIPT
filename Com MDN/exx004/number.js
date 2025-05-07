
function somaMultiplos3ou5(N) {
    let soma = 0
    
    for(let i=1; i < N; i++){
        if(i%3 == 0 || i%5  == 0){
            soma+=i
        }
    }
    return soma
}

console.log(somaMultiplos3ou5(10))