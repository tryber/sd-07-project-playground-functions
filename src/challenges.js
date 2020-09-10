// Desafio 1
function compareTrue(a, b) {
  let comparar = a && b;
  return comparar;  
}

// Desafio 2
function calcArea(b,h) {
  return (b * h) / 2;
}

// Desafio 3
function splitSentence(s) {
  let array = s.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let primeiroItem = array[0];
  let ultimoItem = array[array.length - 1];
  let string = ultimoItem.concat(', ', primeiroItem);
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let pontos = vitoria + ties;
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = 0;
  let repetidos = 0;
  for (let i in numeros){
    if (maiorNumero < numeros[i]){
      maiorNumero = numeros[i];
      repetidos = 1}
    else if (maiorNumero === numeros[i]){
        repetidos += 1;
      }
  }
  return repetidos
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado;
  let posicaoGato1;
  let posicaoGato2;
  posicaoGato1 = Math.abs(cat1 - mouse);
  posicaoGato2 = Math.abs(cat2 - mouse);
  if (posicaoGato1 < posicaoGato2){
    return 'cat1';
  }
  else if(posicaoGato1 > posicaoGato2){
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array1) {
  let array2 = [];
  for (let i in array1) {
    if (array1[i] % 3 === 0 && array1[i] % 5 === 0) {
      array2.push('fizzBuzz');
    } else if (array1[i] % 3 === 0) {
      array2.push('fizz');
    } else if (array1[i] % 5 === 0) {
      array2.push('buzz');
    } else {
      array2.push('bug!');
    }
  }
  return array2;
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
