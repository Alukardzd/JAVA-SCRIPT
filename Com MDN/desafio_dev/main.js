//Em produção

let respostas = ['dia', 'dia', 'tarde', 'dia', 'noite', 'dia', 'noite']
let frequencia = {}
for(r of respostas){
    
    if(r in frequencia){
        frequencia[r] += 1
    }else{
        frequencia[r] = 1
    }
}
console.log (frequencia)












/*for(r in respostas){
    console.log(r)
};
*/

//console.log(respostas)