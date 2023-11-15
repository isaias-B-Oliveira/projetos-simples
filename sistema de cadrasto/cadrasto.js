const readline = require('readline-sync');
console.log("BEM VINDO SISTEMA DE CADRASTO: \n\n");

let nome = readline.question("qual seu nome:");
let sobrenome = readline.question("qual seu sobrenome:");
let sexo = readline.question("qual seu sexo:\n M=masculino, F=feminino, O=outros \n");
let idade = readline.question("qual sua idade: ");
let peso = readline.question("qual seu peso:");
let altura = readline.question("qual sua altura: ");
let termos = readline.question("voce aceita os termos de uso:\n S=sim, N=nao \n")

console.log("\n\n seus dados cadrastais sao:\n\n")

console.log("Nome:"+nome+" "+sobrenome+"\n");
console.log("Sexo:"+sexo+"\n");
console.log("Idade:"+idade+" anos\n");
console.log("Peso:"+peso+"(kg)\n")
console.log("Altura:"+altura+"\n");
console.log("Termos:"+termos+"\n");

