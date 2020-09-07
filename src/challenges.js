// Desafio 1
function compareTrue(valor1, valor2) {
  let retorno = false;
  if (valor1 === true && valor2 === true) {
    retorno = true;
  }
  return retorno;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(frase) {
  let res = [];
  res.push(frase[frase.length - 1]);
  res.push(' ' + frase[0]);
  return `${res}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(param) {
  let maior = null;
  let contador = 0;
  for (let index = 0; index < param.length; index += 1) {
    if (maior <= param[index]) {
      maior = param[index];
    }
  }
  for (let index = 0; index < param.length; index += 1) {
    if (maior === param[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resCat1;
  let resCat2;
  let retorno;
  if (mouse > cat1 && mouse > cat2) {
    resCat1 = mouse - cat1;
    resCat2 = mouse - cat2;
  }
  if (mouse < cat1 && mouse < cat2) {
    resCat1 = cat1 - mouse;
    resCat2 = cat2 - mouse;
  }
  if (mouse > cat1 && mouse < cat2) {
    resCat1 = mouse - cat1;
    resCat2 = cat2 - mouse;
  }
  if (resCat1 > resCat2) {
    retorno = 'cat2';
  }
  if (resCat2 > resCat1) {
    retorno = 'cat1';
  }
  if (resCat1 === resCat2) {
    retorno = 'os gatos trombam e o rato foge';
  }
  return retorno;
}

// Desafio 8
function fizzBuzz(param) {
  function testaRetorno(numero) {
    let retorno;
    if (numero % 3 === 0 && numero % 5 === 0) {
      retorno = 'fizzBuzz';
    } else if (numero % 5 === 0) {
      retorno = 'buzz';
    } else if (numero % 3 === 0) {
      retorno = 'fizz';
    } else {
      retorno = 'bug!';
    }
    return retorno;
  }
  for (let index = 0; index < param.length; index += 1) {
    param[index] = testaRetorno(param[index]);
  }
  return param;
}

// Desafio 9
function encode(string) {
  let arrayString = string.split('');
  function buscaVogal(letra) {
    if (letra === 'a') {
      letra = 1;
    }
    if (letra === 'e') {
      letra = 2;
    }
    if (letra === 'i') {
      letra = 3;
    }
    if (letra === 'o') {
      letra = 4;
    }
    if (letra === 'u') {
      letra = 5;
    }
    return letra;
  }
  for (let index = 0; index < arrayString.length; index += 1) {
    arrayString[index] = buscaVogal(arrayString[index]);
  }
  arrayString = arrayString.join('');
  return arrayString;
}
function decode(string2) {
  let arrayString2 = string2.split('');
  function buscaVogal2(letra2) {
    if (letra2 === '1') {
      letra2 = 'a';
    }
    if (letra2 === '2') {
      letra2 = 'e';
    }
    if (letra2 === '3') {
      letra2 = 'i';
    }
    if (letra2 === '4') {
      letra2 = 'o';
    }
    if (letra2 === '5') {
      letra2 = 'u';
    }
    return letra2;
  }
  for (let index = 0; index < arrayString2.length; index += 1) {
    arrayString2[index] = buscaVogal2(arrayString2[index]);
  }
  arrayString2 = arrayString2.join('');
  return arrayString2;
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
