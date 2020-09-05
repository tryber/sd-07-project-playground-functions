// Desafio 1
function compareTrue(valor1, valor2) {
// seu código aqui
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(' ');
}

// Desafio 4
function concatName(str) {
  // seu código aqui
  return str[str.length - 1] + ', ' + str[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let contador = 0;
  let maior = Math.max.apply(null, numeros);
  for (let numero in numeros) {
    if (numeros[numero] === maior) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);

  if (distCat1 > distCat2) return 'cat2';
  else if (distCat2 > distCat1) return 'cat1';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let result = [];
  
  for (let i in numeros) {
    console.log('numero a testar: ' + numeros[i])
    if ((numeros[i] % 3 === 0) && (numeros[i] % 5 === 0)) result.push('fizzBuzz');
    else if ((numeros[i] % 3 != 0) && (numeros[i] % 5) === 0) result.push('buzz');
    else if ((numeros[i] % 3 === 0) && (numeros[i] % 5) != 0) result.push('fizz');
    else result.push('bug!')
  }

  return result;
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
