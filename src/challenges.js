// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  else {
    return false;
  }
}

compareTrue();

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

calcArea();

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  var espaços = ` `
  var x = string.splitSentence(espaços);
  return x;
}

splitSentence();

// Desafio 4
function concatName(array) {
  // seuls código aqui
  let x = array[(array.length - 1)] + ` ` + array[0];
  return x;
}

concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
