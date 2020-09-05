// Desafio 1
function compareTrue(proposition1, proposition2) {
  return proposition1 && proposition2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let newWord = false;
  let initialPosition = 0;
  let finalPosition = 0;

  function addString(initialPos, finalPos) {
    let newString = '';
    for (let index = 0; index <= finalPos - initialPos; index += 1) {
      newString = `${newString}${string[initialPos + index]}`;
    }
    array.push(newString);
    newWord = false;
  }

  for (let index = 0; index < string.length; index += 1) {
    if (newWord) {
      if (string[index] === ' ') {
        addString(initialPosition, finalPosition);
      } else if (index === string.length - 1) {
        addString(initialPosition, index);
      } else {
        finalPosition = index;
      }
    } else if (string[index] !== ' ') {
      initialPosition = index;
      newWord = true;
    }
  }

  return array;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(array) {
  let maior = 0;
  let counter = 0;
  for (let index in array) {
    if (maior < array[index]) {
      maior = array[index];
    }
  }

  for (let index in array) {
    if (maior === array[index]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let stringArray = [];
  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      stringArray.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      stringArray.push('fizz');
    } else if (array[index] % 5 === 0) {
      stringArray.push('buzz');
    } else {
      stringArray.push('bug!');
    }
  }
  return stringArray;
}

// Desafio 9
function encode(string) {
  let array = [];
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case 'a':
        array.push('1');
        break;
      case 'e':
        array.push('2');
        break;
      case 'i':
        array.push('3');
        break;
      case 'o':
        array.push('4');
        break;
      case 'u':
        array.push('5');
        break;

      default:
        array.push(string[index]);
        break;
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    newString = `${newString}${array[index]}`;
  }
  return newString;
}
function decode(string) {
  let array = [];
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case '1':
        array.push('a');
        break;
      case '2':
        array.push('e');
        break;
      case '3':
        array.push('i');
        break;
      case '4':
        array.push('o');
        break;
      case '5':
        array.push('u');
        break;

      default:
        array.push(string[index]);
        break;
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    newString = `${newString}${array[index]}`;
  }
  return newString;
}

// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let returnArray = [];
  let newArray = array;

  for (let i = 1; i < array.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (newArray[i] < newArray[j]) {
        let position = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = position;
      }
    }
  }

  for (let index = 0; index < newArray.length; index += 1) {
    let object = {};
    object.tech = newArray[index];
    object.name = name;
    returnArray.push(object);
  }
  return returnArray;
}
// Desafio 11
function generatePhoneNumber(array) {
  let counter = {};
  let stringPhone = '(';

  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (const index in array) {
    if (counter.hasOwnProperty(`${array[index]}`)) {
      counter[`${array[index]}`] += 1;
    } else {
      counter[`${array[index]}`] = 1;
    }
  }

  for (const key in counter) {
    if (counter[key] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (let index = 0; index < 2; index += 1) {
    stringPhone = `${stringPhone}${array[index]}`;
  }

  stringPhone = `${stringPhone}) `;

  for (let index = 2; index < 7; index += 1) {
    stringPhone = `${stringPhone}${array[index]}`;
  }

  stringPhone = `${stringPhone}-`;

  for (let index = 7; index < 11; index += 1) {
    stringPhone = `${stringPhone}${array[index]}`;
  }

  return stringPhone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  } else {
    return false;
  }
}
// Desafio 13
function hydrate(string) {
  // seu código aqui
  // https://stackoverflow.com/questions/42532450/extract-number-from-string-javascript
  let coposBebida = string.match(/[0-9]+/g);
  let coposAgua = 0;
  for (let index = 0; index < coposBebida.length; index += 1) {
    coposAgua += parseInt(coposBebida[index], 10);
  }
  if (coposAgua !== 1) {
    return `${coposAgua} copos de água`;
  } else {
    return `${coposAgua} copo de água`;
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
};
