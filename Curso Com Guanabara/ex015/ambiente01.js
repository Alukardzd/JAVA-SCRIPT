var valores = [
    8, 1, 7, 5, 0, 9
]

/*
for(pos = 0; pos < valores.length; pos++) {
    console.log('A posição ' + pos + ' tem o valor ' + valores[pos])
}
*/

for(var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
var pos = valores.indexOf(5)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
}else {
    console.log(`O valor está na posicão ${pos}`)
}