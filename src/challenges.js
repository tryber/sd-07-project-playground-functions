// PLAYGROUND | FUNCTIONS

// Desafio 1
function compareTrue(param1, param2) {
  let value;
  if (param1 && param2) {
    value = true;
  } else {
    value = false;
  }
  return value;
}
// console.log (compareTrue (true, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// console.log(calcArea(20,10))

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}
// console.log (splitSentence('go trybe'));

// Desafio 4
function concatName(string) {
  let primeiroUltimo = `${string[string.length - 1]}, ${string[0]}`;
  return primeiroUltimo;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}
// console.log(footballPoints(10,20));

// Desafio 6

const highestNumberArray = (array) => {
  let highestNumber = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (highestNumber < array[i]) {
      highestNumber = array[i];
    }
  }
  return highestNumber;
};
// console.log(highestNumberArray([9, 1, 2, 3, 9, 5, 7]));

function highestCount(arrayNumbers) {
  let higherNumber = highestNumberArray(arrayNumbers);
  let countRepetitions = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (higherNumber === arrayNumbers[i]) {
      countRepetitions += 1;
    }
  }
  return countRepetitions;
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7, 9, 10]));

// Desafio 7
const messageEqual = (distance, distance2) => {
  let message;
  if (distance === distance2) {
    message = 'os gatos trombam e o rato foge';
  } else if (distance + 1 === distance2 - 1 || distance - 1 === distance2 + 1) {
    message = 'os gatos trombam e o rato foge';
  }
  return message;
};

const compareDistance = (distance, distance2) => {
  let message;
  if (distance < distance2) {
    message = 'cat1';
  } else if (distance > distance2) {
    message = 'cat2';
  } else {
    message = messageEqual(distance, distance2);
  }
  return message;
};

function catAndMouse(mouse, cat1, cat2) {
  let distance = cat1 - mouse;
  let distance2 = cat2 - mouse;
  return compareDistance(Math.abs(distance), Math.abs(distance2));
}
// console.log(catAndMouse(1, 1, 3));

// Desafio 8

const newArrayResult = (firstArray) => {
  let arrayResult = [];
  for (let i = 0; i < firstArray.length; i += 1) {
    arrayResult.push(firstArray[i]);
  }
  return arrayResult;
};
// console.log (newArrayResult([2, 15, 7, 9, 45]));

const changeArray = (secondArray, newArray, index) => {
  if (secondArray[index] % 3 === 0 && secondArray[index] % 5 === 0) {
    newArray[index] = 'fizzBuzz';
  } else if (secondArray[index] % 3 === 0) {
    newArray[index] = 'fizz';
  } else if (secondArray[index] % 5 === 0) {
    newArray[index] = 'buzz';
  } else {
    newArray[index] = 'bug!';
  }
};
// console.log (changeArray([2, 15, 7, 9, 45]));

function fizzBuzz(question08) {
  let newArray = newArrayResult(question08);
  for (let index = 0; index < question08.length; index += 1) {
    changeArray(question08, newArray, index);
  }
  return newArray;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  let arrayString = string.split('');

  let object = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let i in object) {
    let key = i;
    let keyValue = object[i];
    for (let j in arrayString) {
      if (arrayString[j] === key) {
        arrayString[j] = keyValue;
      }
    }
  }
  let join = arrayString.join('');

  return join;
}
// console.log(encode('hi there!'));

function decode(string2) {
  let arrayString2 = string2.split('');

  let object2 = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  for (let i in object2) {
    let key2 = i;
    let keyValue2 = object2[i];

    for (let j = 0; j < arrayString2.length; j += 1) {
      if (arrayString2[j] === key2) {
        arrayString2[j] = keyValue2;
      }
    }
  }
  let join2 = arrayString2.join('');
  return join2;
}
// console.log(decode('h3 th2r2!'));

// Desafio 10
function techList(arrayNames, name) {
  let arrayNames2 = arrayNames.sort();
  let result = [];

  for (let i = 0; i < arrayNames2.length; i += 1) {
    result[i] = { tech: arrayNames2[i], name: name };
  }
  if (arrayNames.length === 0) {
    return 'Vazio!';
  } else {
    return result;
  }
}
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'],'Lucas'))

// Desafio 11
function generatePhoneNumber(array11) {
  // VARIÁVEIS ARMAZENANDO PARTES DO MEU ARRAY
  let phoneNumber1 = `(${array11[0]}${array11[1]})`;
  let phoneNumber2 = [];
  let phoneNumber3 = [];

  // OBJECT CRIADO PARA ARMAZENAR REPETIÇÕES DO MEU ARRAY
  let object = {};

  for (let i = 0; i < array11.length; i += 1) {
    if (object[array11[i]] === undefined) {
      object[array11[i]] = 1;
    } else {
      object[array11[i]] += 1;
    }
  }
  // CONDIÇÃO CRIADA PARA RETORNAR MENSAGEM CASO UM NÚMERO SE REPITA MAIS DO QUE 3 VZS
  for (let key in object) {
    if (object[key] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  // CONDIÇÃO CRIADA CASO MEU ARRAY TENHA TAMANHO DIFERENTE DE 11
  if (array11.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  // CONDIÇÃO CRIADA PARA GERAR MENSAGEM SE MEU ARRAY TIVER NÚMEROS MAIOR DO QUE 9 E MENOR DO QUE 0
  for (let i = 0; i < array11.length; i += 1) {
    if (array11[i] < 0 || array11[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else if (i >= 2 && i < 7) {
      phoneNumber2.push(array11[i]);
    } else if (i >= 7) {
      phoneNumber3.push(array11[i]);
    }
  }
  // CONCATENAÇÃO DA MINHA MENSAGEM
  let phoneNumber2Join = phoneNumber2.join('');
  let phoneNumber3Join = phoneNumber3.join('');

  let mensagem = `${phoneNumber1} ${phoneNumber2Join}-${phoneNumber3Join}`;
  return mensagem;
}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let a = Math.abs(lineA);
  let b = Math.abs(lineB);
  let c = Math.abs(lineC);

  if (a < b + c && b < a + c && c < a + b) {
    return true;
  } else {
    return false;
  }
}
// console.log(triangleCheck(10,14,8));

// Desafio 13
function hydrate(string) {
  let expression = /\d+/g;
  let numberString = string.match(expression);
  let count = 0;

  for (let i = 0; i < numberString.length; i += 1) {
    count += parseInt(numberString[i]);
  }

  if (count < 2) {
    return `${count} copo de água`;
  } else if (count > 1) {
    return `${count} copos de água`;
  }
}
// console.log(hydrate('2 cerveja e 1 vinho'));

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
};
