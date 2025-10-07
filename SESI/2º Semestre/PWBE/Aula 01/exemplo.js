/*
    const - escopo global, valor não muda
    var - escopo global
    let - escopo local
 */
const numero = 100;
var nome = "Fulano";
var idade = 50;
var altura = 1.80;
var cnh = true;

console.log("Numero = " + numero);
console.log("Nome - " + nome);

nome = "Beltrano";

//typeof() - indica o tipo da variavel

console.log("Nome - " + nome + " (" + typeof(nome) + ")");
console.log("Idade - " + idade + " (" + typeof(idade) + ")");
console.log("Altura - " + altura + " (" + typeof(altura) + ")");
console.log("CNH - " + cnh + " (" + typeof(cnh) + ")");

/*
    + soma
    - subtracao
    / divisao
    * multiplicacao
    % modulo
*/

var a = 10;
var b = 20;

console.log(a * b);

/**
 * == Igual
 * != Diferente
 * > Maior
 * >= Maior Igual
 * < Menor
 * <= Menor Igual
 * === Estritamente Igual
 * !== Estritamente Diferente
 */

a = "10";
b = 10;

if(a === b) {
    console.log("Sao Iguais");
} else {
    console.log("Sao Diferentes");
}

switch(a) {
    case "1":
        break;
    case "2":
        break;
    default:
        break;
}

for(let i = 0; i < 10; i++) {
    console.log("I - " + i);
}

a = 11;
while(a < 10) {
    console.log("Teste");
    break;
}

a = 11;
do {
    console.log("Teste 2");
    break;
} while(a < 10);