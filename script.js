/* 1 - Usando o operador &&
JavaScript possui um operador lógico &&, o qual recebe dois valores e retorna
true se ambos os valores são verdadeiros, e retorna false se algum dos valores não o for.

Considerando isso, crie uma função chamada compareTrue que, ao receber dois booleanos:

Retorne true se ambos os valores são verdadeiros;
Retorne false se um ou ambos os parâmetros forem falsos.
Faça a função utilizando o operador &&. */

let opcao1 = true;
let opcao2 = true;

function compareTrue(valor1, valor2) {
  if (valor1 && valor2 == true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(opcao1, opcao2));
