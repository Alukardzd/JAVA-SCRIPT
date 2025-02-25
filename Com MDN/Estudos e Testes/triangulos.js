/*
Faça um algoritmo que leia três valores que representam os três lados de um triângulo e verifique se são válidos, determine se o triângulo é 

equilátero, isósceles ou escaleno.
*/

let A = 22, B = 34, C = 22
if(A + B > C && A + C > B && B + C > A){
    if(A == B || B == C || C == A){
        console.log('É um triangulo Isósceles')
    }else if(A == B && A == C && B == C){
        console.log("É um triangulo Equilátero")
    }else if(A != B && A != C && B != C){
        console.log('É um triângulo Escaleno')
    }
}else{
    console.log(`Não é um triangulo`)
}