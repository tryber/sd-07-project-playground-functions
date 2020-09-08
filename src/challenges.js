
// Desafio 1
function compareTrue(a, b) {
  let result = (a === true && b === true);
  return (result)
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return (area);
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return (array);
}

// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length - 1];
  let string = (`${lastItem}, ${firstItem}`);
  return (string);
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins *= 3) + (ties *= 1);
  return (pontos);
}

// Desafio 6

let highestNumber = function (array) {
  let maiorNumero = array[0];
  for (let i in array) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  return maiorNumero;
}
function highestCount(array) {
  let numeroRepeat = 0;
  for (let j in array) {
    if (array[j] === highestNumber(array)) {
      numeroRepeat += 1;
    }
  }
  return numeroRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado = '';
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    resultado = 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    resultado = 'cat2';
  } else {
    resultado = 'os gatos trombam e o rato foge';
  }
  return (resultado)
}

// Desafio 8
function checkNumber(num) {
  let check = '';
  if (num % 3 === 0 && num % 5 === 0) {
    check += 'fizzBuzz';
  } else if (num % 3 === 0) {
    check += 'fizz';
  } else if (num % 5 === 0) {
    check += 'buzz';
  } else {
    check += 'bug!';
  }
  return check;
}
function fizzBuzz(array) {
  let string = [];
  for (let i in array) {
    if (array.length !== 0) {
      string.push(checkNumber(array[i]));
    }
  }
  return string;
}

// Desafio 9
function encode(string) {
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let indice = 1;
  for (let i in vogais) {
    if (vogais.length !== 0) {
      let regex = new RegExp(vogais[i], 'g');
      string = string.replace(regex, indice);
      indice += 1;
    }
  }
  return string;
}
function decode(string) {
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let indice = 1;
  for (let i in vogais) {
    if (vogais.length !== 0) {
      let regex = new RegExp(indice, 'g');
      string = string.replace(regex, vogais[i]);
      indice += 1;
    }
  }
  return string;
}

// Desafio 10
function techList(array, name) {
  let nArray = [];
  let nItem = '';
  let sArray = [];
  if (array.length === 0) {
    return ('Vazio!')
  }
  sArray = array.sort();
  for (let i in sArray) {
    if (sArray.length !== 0) {
      nItem = {
        tech: sArray[i],
        name: `${name}`,
      }
      nArray.push(nItem);
    }
  }

  return (nArray)
}

// Desafio 11
function repeatNumber(array) {
  let arrayCopy = array.slice();
  let repeats = 1;
  arrayCopy = arrayCopy.sort();
  for (let i = 0; i < arrayCopy.length; i += 1) {
    if (arrayCopy[i] === arrayCopy[i + 1] && arrayCopy[i] === arrayCopy[i + 2]) {
      repeats += 2;
    }
  }
  return repeats;
}
function negativeAndBiggerThanNineNumber(array) {
  let result = 0;
  for (let i in array) {
    if (array[i] < 0 || array[i] > 9) {
      result += 1
    }
  }
  return result;
}
function generatePhoneNumber(array) {
  let string = '';
  if (array.length !== 11 || array.length === 0) {
    return 'Array com tamanho incorreto.';
  }
  if (repeatNumber(array) >= 3 || negativeAndBiggerThanNineNumber(array) >= 1) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  string = array.join('');
  string = string.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  return string;
}

// Desafio 12
function sum(a, b) {
  return a + b;
}
function abs(a, b) {
  return Math.abs(a - b);
}
function checkSumAndAbs(lineA, lineB, lineC) {
  let check = 0;
  let a = lineA;
  let b = lineB;
  let c = lineC;
  if ((sum(a, b) > c) && (sum(a, c) > b) && (sum(b, c) > a)) {
    if ((abs(a, b) < c) && (abs(a, c) < b) && (abs(b, c) < a)) {
      check += 1;
    }
  }
  return check;
}
function triangleCheck(lineA, lineB, lineC) {
  let result = (checkSumAndAbs(lineA, lineB, lineC) >= 1);
  return result;
}

// Desafio 13
function stringInArray(string) {
  string = string.replace(/\D/g, '');
  let newArray = string.split('');
  for (let i in newArray) {
    if (newArray.length !== 0) {
      newArray[i] = +newArray[i];
    }
  }
  return newArray;
}
function sumArray(string) {
  let array = stringInArray(string);
  let soma = 0;
  for (let i in array) {
    if (array.length !== 0) {
      soma += array[i];
    }
  }
  return soma;
}
function hydrate(string) {
  let result = sumArray(string);
  if (result === 1) {
    return `${result} copo de água`;
  }
  return `${result} copos de água`;
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
