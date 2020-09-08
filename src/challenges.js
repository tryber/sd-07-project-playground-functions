// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    resultado = true;
  }
  else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let resultado = ((base*height)/2);
  return resultado;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  resultado = string;
  return resultado.split(` `);
}

// Desafio 4
function concatName(array) {
  let resultado = `${array[array.length-1]}, ${array[0]}`;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = (wins*3) + ties;
  return total;
}

// Desafio 6
function highestCount(array) {
  let cont = 0;
  let maior = 0;
  for (let i = 0; i < array.length; i += 1) {
    let valor = array[i]
    if (valor > maior) {
      maior = valor;
      cont = 0;
      cont += 1;
    }
    else if (valor == maior){
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  cat1Mouse = cat1 - mouse; 
  mouseCat1 = mouse - cat1;
  cat2Mouse = cat2 - mouse;
  mouseCat2 = mouse - cat2;
  if (cat1Mouse > mouseCat1) {
    resp1 = cat1Mouse;
  }
  else {
    resp1 = mouseCat1;
  }

  if (cat2Mouse > mouseCat2) {
    resp2 = cat2Mouse;
  }
  else {
    resp2 = mouseCat2;
  }

  if (resp1 === resp2){
    resultado = `os gatos trombam e o rato foge`;;
  }
  else if (resp1 > resp2){
    resultado = `cat2`;
  }
  else {
    resultado = `cat1`
  }
  return resultado;
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i += 1) {
    if ((array[i] % 3) === 0 && (array[i] % 5) === 0) {
      resultado.push(`fizzBuzz`);
    }
    else if ((array[i] % 3) == 0){
      resultado.push(`fizz`);
    }
    else if ((array[i] % 5) == 0) {
      resultado.push(`buzz`);
    }
    else {
      resultado.push(`bug!`);
    }
  }
  return resultado;
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
