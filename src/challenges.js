// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let arrayStrings = [];
  let separatedString = '';
  for (let characterIndex = 0; characterIndex < sentence.length; characterIndex += 1) {
    if (sentence[characterIndex] !== ' ') {
      separatedString += sentence[characterIndex];
    } else {
      arrayStrings.push(separatedString);
      separatedString = '';
    }
  }
  arrayStrings.push(separatedString);

  return arrayStrings;
}

// Desafio 4
function concatName(arrayStrings) {
  return `${arrayStrings[arrayStrings.length - 1]}, ${arrayStrings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let repeatTimes = 0;
  let maxNumber = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    maxNumber = Math.max(maxNumber, arrayNumbers[index]);
  }
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === maxNumber) {
      repeatTimes += 1;
    }
  }
  return repeatTimes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}

// função auxiliar para desafio 8
function divisorCheck(number) {
  let result = '';
  if (number % 3 === 0 && number % 5 === 0) {
    result = 'fizzBuzz';
  } else if (number % 3 === 0) {
    result = 'fizz';
  } else if (number % 5 === 0) {
    result = 'buzz';
  } else result = 'bug!';
  return result;
}
// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayResult = [];
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    arrayResult.push(divisorCheck(arrayNumbers[i]));
  }
  return arrayResult;
}
// Desafio 9
function encode(string) {
  let encString = '';
  encString = string.replace(/a/g, '1');
  encString = encString.replace(/e/g, '2');
  encString = encString.replace(/i/g, '3');
  encString = encString.replace(/o/g, '4');
  encString = encString.replace(/u/g, '5');
  return encString;
}

function decode(string) {
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case '1':
        newString += 'a';
        break;
      case '2':
        newString += 'e';
        break;
      case '3':
        newString += 'i';
        break;
      case '4':
        newString += 'o';
        break;
      case '5':
        newString += 'u';
        break;
      default:
        newString += string[i];
    }
  }
  return newString;
}

// Desafio 10
function techList(techs, name) {
  let list = [];
  techs.sort();
  if (techs.length < 1) {
    return 'Vazio!';
  }
  for (let i = 0; i < techs.length; i += 1) {
    let techToLearn = {
      tech: techs[i],
      name: `${name}`,
    };
    list.push(techToLearn);
  }
  return list;
}

// função auxiliar Desafio 11: verifica quantidade de números repetidos
function repeatNum(num, arrayNumbers) {
  let numRep = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (num === arrayNumbers[i]) {
      numRep += 1;
    }
  }
  if (numRep >= 3) {
    return false; // 'não é possível gerar um número de telefone com esses valores';
  }
  return true;
}
// função aux. Desafio 11: Verifica se tem números negativos ou acima de 9
function validNum(arrayNumbers) {
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] < 0 || arrayNumbers[i] > 9) {
      return false; // 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return true;
}
// função auxiliar Desafio 11: Verifica tamanho do array de números
function lengthNumber(arrayNumbers) {
  if (arrayNumbers.length > 11 || arrayNumbers.length < 11) {
    return false; // 'Array com tamanho incorreto.';
  }
  return true;
}
// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let phoneNumber = '';
  if (!lengthNumber(arrayNumbers)) {
    return 'Array com tamanho incorreto.';
  }
  if (!validNum(arrayNumbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (!repeatNum(arrayNumbers[i], arrayNumbers)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    phoneNumber += arrayNumbers[i];
  }
  return `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 7)}-${phoneNumber.substring(7)}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let cond1 = (lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC));
  let cond2 = (lineB < lineC + lineA) && (lineB > Math.abs(lineC - lineA));
  let cond3 = (lineC < lineB + lineA) && (lineC > Math.abs(lineB - lineA));
  return cond1 && cond2 && cond3;
}

// Desafio 13: utilizando funções split e parseInt
function hydrate(string) {
  let arrayStrings = string.split(' ');
  let sumNumbers = 0;

  for (let i = 0; i < arrayStrings.length; i += 1) {
    if (!(isNaN(arrayStrings[i]))) {
      sumNumbers += parseInt(arrayStrings[i], 10);
    }
  }
  if (sumNumbers === 1) {
    return '1 copo de água';
  }
  return `${sumNumbers} copos de água`;
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
