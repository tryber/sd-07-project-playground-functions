//  consts for tests

// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringPhrase) {
  let arrayPhrase = stringPhrase.split(' ');
  return arrayPhrase;
}

// Desafio 4
function concatName(arrayOfNames) {
  const lastPosition = arrayOfNames.length - 1;
  const lastName = arrayOfNames[lastPosition];
  arrayOfNames[lastPosition] = arrayOfNames[0];
  arrayOfNames[0] = lastName;
  return arrayOfNames;
}

// Desafio 5
function footballPoints(wins, ties) {
  const winPoints = 3;
  const tiePoint = 1;
  return (wins * winPoints) + (ties * tiePoint);
}

// Desafio 6
function highestCount(numbersArray) {
  let higherNumber = numbersArray[0];
  let totalCount = 0;
  for (let actual in numbersArray) {
    if (higherNumber === numbersArray[actual]) {
      totalCount += 1;
    } else if (higherNumber < numbersArray[actual]) {
      totalCount = 1;
      higherNumber = numbersArray[actual];
    }
  }
  return totalCount;
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
