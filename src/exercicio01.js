/*
Faça um programa que leia quatro notas, 
acumule o valor das notas e depois do loop calcule a média. 
Em seguida, usando if/else if/else, 
se a média for maior ou igual a 7 imprima na tela, aluno aprovado, 
se for maior ou igual a 5 imprima aluno em recuperação 
e se for menor que 5 aluno reprovado. 
*/

// leia 4 valores usando um loop
// a cada iteração, acumule a soma das notas anteriores com a nota informada
// calcule a média das notas
// valide se a nota é maior ou igual a 7 e caso verdadeiro, imprima aluno aprovado
// caso a validação anterior for falsa, 
// valide se a media é maior ou igual a 5 e caso verdadeiro, imprima aluno em recuperação
// caso a validação anterior for falsa, imprima aluno reprovado

const readline = require('readline-sync');

let somaNotas = 0;

for (let i = 0; i <= 3; i++) {
  const nota = readline.questionFloat("Informe uma nota: ");
  // somaNotas = somaNotas + nota;
  somaNotas += nota;
}

const media = somaNotas / 4;

if (media >= 7) {
  console.log("Aluno Aprovado")
} else if (media >= 5) { // 6.9 e 5.0
  console.log("Aluno em Recuperação")
} else {
  console.log("Aluno Reprovado")
}

