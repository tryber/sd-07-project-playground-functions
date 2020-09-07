// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3 
function splitSentence(value) {
  let retorn = value.split(` `);
  return retorn;
}

// Desafio 4
function concatName(array) {
 let conjuntoArray = ``;
 for (let i = array.length -1; i >= 0; i -= 1) {
   if ( i === array.length - 1) {
     conjuntoArray += array[i] + `, `;
   } else if (i === 0) {
    conjuntoArray += array[i];
   }
 }
 return conjuntoArray;
}


// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  let eachWin = 3;
  let eachTies = 1;
  for (let i = 0; i < wins; i += 1) {
    points += eachWin;
  }
  for (let i = 0; i < ties; i += 1) {
    points += eachTies;
  }
  return points;
}

// Desafio 6
function highestCount(array6) {
  let highNumer = 0;
  let repeatHighNumer = 0;
  for (let i = 0; i < array6.length; i += 1) {
    if (array6[i] >= highNumer) {
      highNumer = array6[i];
    }
  }
  for (let i = 0; i < array6.length; i += 1) {
    if (array6[i] == highNumer) {
      repeatHighNumer += 1;
    }
  }
  return repeatHighNumer;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  mousePosition = mouse;
  cat1Position = Math.abs(cat1 - mousePosition);
  cat2Position = Math.abs(cat2 - mousePosition);
  
  if (cat1Position < cat2Position){
    return "cat1";
  } else if (cat2Position < cat1Position){
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
  
}

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let arrayNovo = [];
  for (let i = 0; i < arrayDeNumeros.length; i += 1) {
    if (arrayDeNumeros[i] % 3 === 0 && arrayDeNumeros[i] % 5 === 0){
      arrayNovo.push(`fizzBuzz`);
    } else if (arrayDeNumeros[i] % 3 === 0) {
      arrayNovo.push(`fizz`);
    } else if (arrayDeNumeros[i] % 5 === 0) {
      arrayNovo.push(`buzz`);
    } else {
      arrayNovo.push(`bug!`)
    }
  }
  return arrayNovo;
}

// Desafio 9
function encode(string) {
  let encodeString = ``;
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case `a`:
        encodeString += 1;
        break;
      case `e`:
        encodeString += 2;
        break;
      case `i`:
        encodeString += 3;
        break;
      case `o`:
        encodeString += 4;
        break;
      case `u`:
        encodeString += 5;
        break;
      default:
        encodeString += string[i];
    }
  }
  return encodeString;
}

function decode(string) {
  let decodeString = ``;
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case `1`:
        decodeString += `a`;
        break;
      case `2`:
        decodeString += `e`;
        break;
      case `3`:
        decodeString += `i`;
        break;
      case `4`:
        decodeString += `o`;
        break;
      case `5`:
        decodeString += `u`;
        break;
      default:
        decodeString += string[i];
    }
  }
  return decodeString;
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
