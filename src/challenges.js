// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui

  if (bool1 && bool2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let separator = ' ';
  let array = string.split(separator);
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let output = '';
  for (let i = 0; i < array.length; i += 1) {
    if (i === 0) {
      output += `${array[array.length - 1]}, `;
    } else if (i === array.length - 1) {
      output += array[0];
    }
  }
  return output;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
// seu código aqui
  let count = 0;
  let maiorNumero = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maiorNumero) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let dist1 = cat1 - mouse;
  let dist2 = cat2 - mouse;
  if (dist1 < 0) {
    dist1 *= -1;
  } else if (dist2 < 0) {
    dist2 *= -1;
  }
  if (dist1 < dist2) {
    return 'cat1';
  } else if (dist2 < dist1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let arraySaida = [];
  // seu código aqui
  for (let x in array) {
    if (array[x] % 3 === 0 && array[x] % 5 === 0) {
      arraySaida.push('fizzBuzz');
    } else if (array[x] % 3 === 0) {
      arraySaida.push('fizz');
    } else if (array[x] % 5 === 0) {
      arraySaida.push('buzz');
    } else {
      arraySaida.push('bug!');
    }
  }
  return arraySaida;
}

// Desafio 9
function encode(string) {
  let stringChange = string.split('');
  // seu código aqui
  for (let i = 0; i < stringChange.length; i += 1) {
    switch (stringChange[i]) {
      case 'a':
        stringChange[i] = 1;
        break;
      case 'e':
        stringChange[i] = 2;
        break;
      case 'i':
        stringChange[i] = 3;
        break;
      case 'o':
        stringChange[i] = 4;
        break;
      case 'u':
        stringChange[i] = 5;
        break;
      default:
        stringChange[i] = stringChange[i];
    }
  }
  return stringChange.join('');
}

function decode(string) {
  // seu código aqui
  let stringChange = string.split('');
  // seu código aqui
  for (let i = 0; i < stringChange.length; i += 1) {
    switch (stringChange[i]) {
      case '1':
        stringChange[i] = 'a';
        break;
      case '2':
        stringChange[i] = 'e';
        break;
      case '3':
        stringChange[i] = 'i';
        break;
      case '4':
        stringChange[i] = 'o';
        break;
      case '5':
        stringChange[i] = 'u';
        break;
      default:
        stringChange[i] = stringChange[i];
    }
  }
  return stringChange.join('');
}

// Desafio 10
function techList(array, name) {
  // seu código aqui
  let obj = {};
  let newArray = [];
  let arrayEmOrdem = array.sort();
  for (let i = 0; i < arrayEmOrdem.length; i += 1) {
    obj = {
      tech: arrayEmOrdem[i],
      name: name,
    }
    newArray.push(obj);
  }
  if (newArray.length === 0 && newArray[0] == null) {
    return 'Vazio!';
  }
  return newArray;
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
