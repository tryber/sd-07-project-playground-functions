// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 & boolean2 === true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(true, true));

/* ________________________________________________________________________________ */

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

console.log(calcArea(2, 3));

/* ________________________________________________________________________________ */

// Desafio 3
function splitSentence(string) {
  let arrayStrings = string.split(' ');
  return arrayStrings;
}

console.log(splitSentence('família é amor'));

/* ________________________________________________________________________________ */

// Desafio 4
function concatName(arrayPosicoes) {
  let primeiroEUltimo = arrayPosicoes[arrayPosicoes.length - 1] + ', ' + arrayPosicoes[0];
  return primeiroEUltimo;
}

console.log(concatName(['Ana', 'Maria', 'Joana', 'Jaquina', 'Francisca']));

/* ________________________________________________________________________________ */

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = 3;
  let empate = 1;
  let campeonato = 0;
  campeonato = (wins * vitoria) + (ties * empate);
  return campeonato;  
} 

console.log(footballPoints(3, 11));

/* ________________________________________________________________________________ */

// Desafio 6
// Encontrar o maior número da array
// Contar quantas vezes se repete
function highestCount(arrayNumeros) {
  let maiorNumero = 0;
  let contNumero = 0;
  for (let i = 0; i < arrayNumeros.length; i += 1) {
    if (maiorNumero < arrayNumeros[i]) {
      maiorNumero = arrayNumeros[i];
    } else {
      maiorNumero = maiorNumero;
    }
    if (maiorNumero === arrayNumeros[i]) {
      contNumero = contNumero + 1;              
    } 
  }
  return contNumero;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

/* ________________________________________________________________________________ */

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

/* ________________________________________________________________________________ */

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

/* ________________________________________________________________________________ */

// Desafio 9
function encode() {
  // seu código aqui
}

/* ________________________________________________________________________________ */

function decode() {
  // seu código aqui
}

/* ________________________________________________________________________________ */

// Desafio 10
function techList() {
  // seu código aqui
}

/* ________________________________________________________________________________ */

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

/* ________________________________________________________________________________ */

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

/* ________________________________________________________________________________ */

// Desafio 13
function hydrate() {
  // seu código aqui
}

/* ________________________________________________________________________________ */

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
