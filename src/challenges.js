// Desafio 1
function compareTrue(valorA, valorB) {
  if(valorA == true && valorB == true){
    return true;
  }
  if(valorA == false && valorB == false || valorA == true && valorB == false || valorA == false && valorB == true){
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  return ((base*height)/2);
}


// Desafio 3
function splitSentence(palavra) {
  let palavraSeparada = palavra.split(' ');
  return palavraSeparada;
}


// Desafio 4
function concatName(concatena) {
  return concatena[concatena.length-1] + ", "+  concatena[0];  
}

arrio = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

console.log(concatName(arrio));

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
