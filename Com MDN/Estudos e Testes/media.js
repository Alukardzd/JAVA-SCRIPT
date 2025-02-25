let Name_Aluno = "Guilherme"
let Nota1 = 4, Nota2 = 3, Nota3 = 2, Nota4 = 2;
let Media = (Nota1 + Nota2 + Nota3 + Nota4)/4
if(Media >= 7){
    console.log(`${Name_Aluno} foi Aprovado com média ${Media}`)
}else if(Media > 3){
    console.log(`${Name_Aluno} deverá realizar a Recuperação com média ${Media}`)
}else{
    console.log(`${Name_Aluno} está Reprovado com média ${Media}`)
}