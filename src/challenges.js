// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}
// Desafio 3
function splitSentence(string) {
  let splits = string.split(' ');
  return splits;
}
// Desafio 4
function concatName(array) {
  let string = `${array[array.length - 1]}, ${array[0]}`;
  return string;
}
// Desafio 5
function footballPoints(wins, ties) {
  const pointsPerVictory = 3;
  let points = (wins * pointsPerVictory) + ties;
  return points;
}
// Desafio 6
function highestCount(arrayNumbers) {
  let highestNumber = 0;
  let sum = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] > highestNumber) {
      highestNumber = arrayNumbers[i];
    }
  }
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] === highestNumber) {
      sum += 1
    }
  }
  return sum;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);

  if (mouse === distanceCat1 && mouse === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } else {
    return 'cat1';
  }
}
// Desafio 8
function fizzBuzz(array) {
  let auxArray = [];

  for (let key in array) {
    if (array[key] % 3 !== 0 && array[key] % 5 !== 0) {
      auxArray.push('bug!');
    } else if (array[key] % 3 === 0 && array[key] % 5 === 0) {
      auxArray.push('fizzBuzz');
    } else if (array[key] % 3 === 0) {
      auxArray.push('fizz');
    } else if (array[key] % 5 === 0) {
      auxArray.push('buzz');
    }
  }
  return auxArray;
}
// Desafio 9
function encode(string) {
  let str = '';
  for (let i = 0; i <= string.length - 1; i += 1) {
    if (string[i] === 'a') {
      str += '1';
    } else if (string[i] === 'e') {
      str += '2';
    } else if (string[i] === 'i') {
      str += '3';
    } else if (string[i] === 'o') {
      str += '4';
    } else if (string[i] === 'u') {
      str += '5';
    } else {
      str += string[i];
    }
  }
  return str;
}
function decode(string) {
  let str = '';

  for (let i = 0; i <= string.length - 1; i += 1) {
    if (string[i] === '1') {
      str += 'a';
    } else if (string[i] === '2') {
      str += 'e';
    } else if (string[i] === '3') {
      str += 'i';
    } else if (string[i] === '4') {
      str += 'o';
    } else if (string[i] === '5') {
      str += 'u';
    } else {
      str += string[i];
    }
  }
  return str
}
// Desafio 10
function techList(array, name) {
  let list = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < array.length; i += 1) {
    let techObject = {
      tech: array[i],
      name: name,
    }
    list.push(techObject);
    techObject = '';
  }
  for (let i = 0; i <= list.length; i += 1) {
    list.sort((a, b) => {
      if (a.tech > b.tech) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  return list;
}
// Desafio 11
function generatePhoneNumber(array) {
  let phoneNumber = '(';
  let count = 0;

  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i <= array.length; i += 1) {
    for (let j = 0; j <= array.length; j += 1) {
      if (array[i] === array[j]) {
        count += 1;
      }
    }
    if (array[i] < 0 || array[i] > 9 || count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else {
      count = 0;
    }
  }

  for (let i = 0; i < array.length; i += 1) {
    if (i === 1) {
      phoneNumber += array[i];
      phoneNumber += ')';
    } else if (i === 2) {
      phoneNumber += ' ';
      phoneNumber += array[i];
    } else if (i === 7) {
      phoneNumber += '-';
      phoneNumber += array[i];
    } else {
      phoneNumber += array[i];
    }
  }
  return phoneNumber;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA + lineB) > lineC && (lineB + lineC) > lineA && (lineA + lineC) > lineB) {
    if (Math.abs(lineA - lineB) < lineC && Math.abs(lineB - lineC) < lineA && Math.abs(lineA - lineC) < lineB) {
      return true
    }
  } else {
    return false;
  }
}
// Desafio 13
function hydrate(string) {
  let cupWater = 0;
  let newString = string.replace(/\D/g, '');

  for (let i = 0; i < newString.length; i += 1) {
    cupWater += parseInt(newString[i]);
  }

  if (cupWater < 2) {
    return `${cupWater} copo de água`;
  } else {
    return `${cupWater} copos de água`;
  }
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
