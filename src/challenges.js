// Desafio 1
function compareTrue(valueOne, valueTwo) {
  if (valueOne && valueTwo === true) {
    return true;
  } else {
    return false;
  }
}

compareTrue(true, false);

// Desafio 2
function calcArea(base, height) {
  let cal = (base*height)/2;
  console.log(cal);
  return cal;
}

calcArea(2,3);

// Desafio 3
function splitSentence(string) {
  let result = string.split(' ');
  console.log(result);
  return result;
}
splitSentence('go Trybe');

// Desafio 4
function concatName(strings) {
  let lastString = strings[strings.length-1];
  let strFinal = `${lastString}, ${strings[0]}`;
  console.log(strFinal);
  return lastString, strings[0];
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);

// Desafio 5
function footballPoints(wins, ties) { 
  let points = (3*wins)+(1*ties);
  console.log(points);
  return points;
}
footballPoints(2, 1)

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
