// Desafio 1
function compareTrue(param1, param2) {
  if(param1 == true && param2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let arrayResultado = string.split(" ");
  return arrayResultado;
}

// Desafio 4
function concatName(array) {
  let resultado = `${array[array.length -1]}, ${array[0]}`
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties);
  return pontos;
}

// Desafio 6
function highestCount(numbers) {
  numbers.sort();
  let maiorRepetido = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] == numbers[0]) {
      maiorRepetido += 1;
    }
  } return maiorRepetido;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 - mouse < cat2 - mouse) {
    return "cat1";
  } else if (cat1 == cat2) {
    return "os gatos trombam e o rato foge";
  } else {
    return "cat2";
  }
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
