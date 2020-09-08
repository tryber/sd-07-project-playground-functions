// Desafio 1
function compareTrue(a, b) {
  let compare = a && b;
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let separator = ' ';
  let array = string.split(separator);
  return array;
}

// Desafio 4
function concatName(array) {
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
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let count = 0;
  let maiorNumero = 0;
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
  let stringChange = string.split('');
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
  let obj = {};
  let newArray = [];
  let arrayEmOrdem = array.sort();
  for (let i = 0; i < arrayEmOrdem.length; i += 1) {
    obj = {
      tech: arrayEmOrdem[i],
      name,
    }
    newArray.push(obj);
  }
  if (newArray.length === 0 && newArray[0] == null) {
    return 'Vazio!';
  }
  return newArray;
}

// Desafio 11
function generatePhoneNumber(array) {
  let newArray = [];
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let count = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        count += 1;
      }
    }
    if (count > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    switch (i) {
      case 0:
        newArray.push('(');
        break;
      case 2:
        newArray.push(') ');
        break;
      case 7:
        newArray.push('-');
        break;
      default:
        break;
    }
    newArray.push(array[i]);
  }
  return newArray.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB > lineC && lineA + lineC > lineB && lineB + lineC > lineA) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let number = string.match(/\d+/g);
  let sum = 0;
  for (let i = 0; i < number.length; i += 1) {
    sum += parseInt(number[i], 10);
  }
  if (sum === 1) {
    return `${sum} copos de água`;
  }
  return `${sum} copos de água`;
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
