// Desafio 1
function compareTrue(bool1, bool2) {
  let boolR = false;
  if (bool1 && bool2) {
    boolR = true;
  }
  return boolR;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
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

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
    return (3 * wins) + ties;
}

// Desafio 6
function highestCount() {
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

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
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
