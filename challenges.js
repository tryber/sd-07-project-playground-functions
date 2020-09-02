let a;
let b;

/* -----------------
|  Área de funções |
-------------------- */

/* 1) Usando Operador && */
function compareTrue(bool1, bool2) {
  let boolR = false;
  if (bool1 && bool2) {
    boolR = true;
  }
  return boolR;
}

/* 2) Área do triângulo */
function calcArea(base, height) {
  return ((base * height) / 2);
}

/* 3) Dividindo a frase */
function splitSentence(frase) {
  let palavra = '';
  let arrayPalavras = [];
  for (let i in frase) {
    if (frase[i] !== ' ') {
      palavra += frase[i];
    } else {
      arrayPalavras.push(palavra);
      palavra = '';
    }
  }
  arrayPalavras.push(palavra);
  return arrayPalavras;
}

/* 4) Concatenação de strings */
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

/* 5) Pontos no futebol */
function footballPoints(wins, ties) {
  return (3 * wins) + ties;
}

/* 6) Repetição do maior número */

function somaRepeat(array, pos) {
  let soma = 0;
  for (let i in array) {
    if (array[pos] === array[i]) {
      soma += 1;
    }
  }
  return soma;
}

function highestCount(array) {
  let posMaisF = 0;
  let somaMaisF = somaRepeat(array, posMaisF);
  let posAtual = posMaisF + 1;
  let somaAtual = 0;
  for (posAtual; posAtual < array.length; posAtual += 1) {
    somaAtual = somaRepeat(array, posAtual);
    if (somaAtual > somaMaisF) {
      posMaisF = posAtual;
      somaMaisF = somaAtual;
    }
  }
  return `Posição: ${posMaisF} Soma: ${somaMaisF}`;
}

/* 7) Caça ao rato */
function catAndMouse(mouse, cat1, cat2) {
  let retornar;
  if (cat1 > cat2) {
    retornar = cat1;
  } else if (cat1 < cat2) {
    retornar = cat2;
  } else {
    retornar = 'os gatos trombam e o rato foge';
  }
  return retornar;
}

/* -----------------
| Área de execução |
-------------------- */

/* 1) Usando Operador && */
a = true;
b = true;
console.log(compareTrue(a, b));

/* 2) Área do triângulo */
a = 10;
b = 50;
console.log(calcArea(a, b));

/* 3) Dividindo a frase */
a = 'go trybe';
console.log(splitSentence(a));

/* 4) Concatenação de strings */
a = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(a));

/* 5) Pontos no futebol */
a = 3;
b = 2;
console.log(footballPoints(a, b));

/* 6) Repetição do maior número */
a = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(a));

/* 7) Caça ao rato */
a = 10;
b = 12;
c = 14;
console.log(catAndMouse(a, b, c));