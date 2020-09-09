// Desafio 1
/*JavaScript possui um operador lógico &&, o qual recebe dois valores e retorna true se ambos os valores são verdadeiros, e retorna false se algum dos valores não o for.

Considerando isso, crie uma função chamada compareTrue que, ao receber dois booleanos:

Retorne true se ambos os valores são verdadeiros;
Retorne false se um ou ambos os parâmetros forem falsos.
Faça a função utilizando o operador &&.*/
// let a = true;
// let b = true;

function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// compareTrue(a, b);

// Desafio 2
/*Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e outro de altura (chamado height) de um triângulo e retorne o cálculo da sua área.

Lembre-se que a área de um triângulo é calculada através da seguinte fórmula: (base * altura) / 2.*/
// let base = 4;
// let height = 5;

function calcArea(base, height) {
  let calculate = (base * height) / 2;
  return calculate;
}

// calcArea(base, height);

// Desafio 3
/* Escreva uma função com o nome splitSentence, um qual receberá uma string e retornará uma matriz de strings separada por cada espaço na string original.

Exemplo: se uma função receber uma string "go Trybe", o retorno deve ser ['go', 'Trybe'].*/
// let string = "go Trybe"

function splitSentence(string) {
  let stringSplit = string.split(" ");
  return stringSplit;
}

// Desafio 4
/* Escreva uma função com o nome concatName que, ao receber uma matriz de strings, retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da matriz.

Isso quer dizer que, caso o parâmetro passado para concatName seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deve retornar Paolillo, Lucas. */
function concatName(array) {
  let firstName = array[0];
  let lastName = array[array.length - 1];
  return `${lastName}, ${firstName}`;
}

// Desafio 5
/* Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deve se chamar wins) e o número de empates (esse parâmetro deve se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato.

Para tanto, considerar que cada vitória vale 3 pontos e cada empate vale 1 ponto. */
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// // Desafio 6
/* Escreva uma função chamada highestCount que, ao receber uma matriz de números, retorne a quantidade de vezes que o maior deles se repete.

Exemplo: caso o parâmetro de highestCount seja uma matriz com valores [9, 1, 2, 3, 9, 5, 7], uma função deve retornar 2, que é a quantidade de vezes que o número 9(maior número da matriz) se repete. */
function highestCount(array) {
  // organizar em ordem
  let order = array.sort();
  // descobrir o maior
  let highNumber = order[order.length - 1];
  // quantas vezes se repete
  let counter = 0;
  for (i = 0; i < order.length; i +=1) {
    if (order[i] == highNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
/* Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão atrás de um rato chamado mouse. Imagine que cada um dos três animais está em uma posição representada por um número.

Sabendo disso, crie uma função chamada catAndMouseque, ao receber a posição de mouse, cat1 e cat2, nessa ordem , calcule as distâncias entre o rato e os gatos e retorne qual dos felinos irá alcançar o rato primeiro (sendo aquele que estará mais perto).

Exemplo: caso o gato cat2 está a 2 unidades de distância do rato, e cat1 está a 3 unidades, sua função deve retornar cat2.

Caso os gatos estejam na mesma distância do rato, a função deve retornar uma string "os gatos trombam e o rato foge". */
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 < distanceCat2) {
    return "cat1";
  } else if (distanceCat1 > distanceCat2) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
/* Crie uma função chamada fizzBuzzque receba uma matriz de números e retorne uma matriz da seguinte forma:

Para cada número da Array que seja divisível apenas por 3, apresente uma string "fizz";
Para cada número da Array que seja divisível apenas por 5, apresente uma string "buzz";
Caso o número seja divisível por 3 e 5, retorne uma string "fizzBuzz";
Caso o número não possa ser dividido por 3 nem por 5, retorne uma string "bug!";
Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deve retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"]. */
function fizzBuzz(array) {
  let aux = [];

  for (i = 0; i < array.length; i += 1) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      aux.push("fizzBuzz");
    } else if (array[i] % 3 == 0) {
      aux.push("fizz");
    } else if (array[i] % 5 == 0) {
      aux.push("buzz");
    } else {
      aux.push("bug!");
    }
  }

  return aux;
}

// Desafio 9
/* Crie duas funções: a primeira deve se chamar encode e, ao receber uma string como parâmetro, deve trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

Ou seja, caso o parâmetro de encodeseja "hi there!", o retorno deve ser "h3 th2r2!".

A segunda função deve se chamar decode e fazer o contrário de encode- ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deve ser "hi there!") . */
function encode(string) {
  let newString = string.replace(/a/gi, 1);
    newString = newString.replace(/e/gi, 2);
    newString = newString.replace(/i/gi, 3);
    newString = newString.replace(/o/gi, 4);
    newString = newString.replace(/u/gi, 5);
  return newString;
}
function decode(string) {
  let originalString = string.replace(/1/g, "a");
    originalString = originalString.replace(/2/g, "e");
    originalString = originalString.replace(/3/g, "i");
    originalString = originalString.replace(/4/g, "o");
    originalString = originalString.replace(/5/g, "u");
  return originalString;
}

// Desafio 10
/* Crie uma função que recebe uma matriz de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado name com um nome.

Para cada tecnologia sem array, crie um objeto com a seguinte estrutura:
{
  tech: "NomeTech",
  name: name
}
Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo techno objeto.

A saída da sua função deve ser uma lista de objetos ordenados pelo campo tech dos objetos com o formato acima.

Exemplo:

Entradas da função:

["React", "Jest", "HTML", "CSS", "JavaScript"]
"Lucas"

// Saída:

[
  { tech: "CSS", name: "Lucas" }, { tech: "HTML", name: "Lucas }, { tech: "JavaScript", name: "Lucas" }, { tech: "Jest", name: "Lucas" }, { tech: "React", name: "Lucas" }
]
Caso o array venha a função vazia sua função deve retornar 'Vazio!' */
function techList(array, name) {
  // let array é ["React", "Jest", "HTML", "CSS", "JavaScript"]
  // let name é "Lucas"
  // Ordena-los alfabeticamente
  let orderArray = array.sort();
  // Aloca-los em uma array de objetos
  let newArray = [];
  // Tirar as tecnologias da array
  for (i = 0; i < orderArray.length; i += 1) {
    // Transformar em objetos
    let object = {};
    object["tech"] = orderArray[i];
    object["name"] = name;
    // Aloca-los em uma array de objetos
    newArray.push(object);      
  }
  
  if (newArray.lenght === 0 || newArray[0] == null) {
    return "Vazio!";
  }
  return newArray;
}

// Desafio 11
/* Crie uma função chamada generatePhoneNumber que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.

Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], deve generatePhoneNumber retornar (12) 34567-8901.

Se uma função receber um array com tamanho diferente de 11, uma mesma deve retornar "Array com tamanho incorreto.".

Caso algum dos números da matriz seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, deve generatePhoneNumberretornar uma string "não é possível gerar um número de telefone com esses valores". */
function generatePhoneNumber(array) {
  // seu código aqui
}

// Desafio 12
/* Um triângulo E Composto de Três Linhas: lineA, lineBe lineC. Crie uma função chamada triangleCheckque deve receber como três linhas como parâmetro e retornar se é possível formar um triângulo com os valores de cada linha

Para tanto, tenha em mente algumas considerações:

Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.

Para obter o valor absoluto de um número em JavaScript, pesquise pela função Math.abs.

O retorno da sua função deve ser um booleano.

Exemplo: o retorno de deve triangleCheck(10, 14, 8)ser true. */
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
/* Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.

Crie a função hydrateque recebe uma string, e retorne a sugestão de quantos copos de água você deve beber. Exemplos:

String recebida:
  "1 cerveja"
String retornada:
  "1 copo de água"
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
Notas

Para simplificar, consideraremos que qualquer coisa com um número à frente é uma bebida e que a string sua sempre virá com o formato (em número) + tipo da bebida .

O número na frente de cada bebida está no intervalo entre 1 e 9.

Dica: pesquise por algo semelhante a get all integers inside a string js. */
function hydrate() {
  // seu código aqui
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
