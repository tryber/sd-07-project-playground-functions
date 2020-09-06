// Desafio 1
function compareTrue(firstBoolean, secondBoolean) {
  return firstBoolean && secondBoolean;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayStrings) {
  return `${arrayStrings[arrayStrings.length - 1]}, ${arrayStrings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let highestNumber = arrayNumbers[0];
  let numberCount = 0;

  for (let index in arrayNumbers) {
    if (arrayNumbers[index] > highestNumber) {
      highestNumber = arrayNumbers[index];
    }
  }
  for (let index in arrayNumbers) {
    if (arrayNumbers[index] === highestNumber) {
      numberCount += 1;
    }
  }
  return numberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const firstCatDistance = Math.abs(mouse - cat1);
  const secondCatDistance = Math.abs(mouse - cat2);

  if (firstCatDistance < secondCatDistance) {
    return 'cat1';
  } else if (firstCatDistance > secondCatDistance) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayResult = [];
  for (let i in arrayNumbers) {
    if (arrayNumbers[i] % 3 === 0 && arrayNumbers[i] % 5 === 0) {
      arrayResult.push('fizzBuzz');
    } else if (arrayNumbers[i] % 3 === 0) {
      arrayResult.push('fizz');
    } else if (arrayNumbers[i] % 5 === 0) {
      arrayResult.push('buzz');
    } else if (arrayNumbers[i] % 3 !== 0 && arrayNumbers[i] % 5 !== 0) {
      arrayResult.push('bug!');
    }
  }
  return arrayResult;
}

// Desafio 9
function encode(stringToEncode) {
  let codedString = stringToEncode.split('');

  for (let char = 0; char < codedString.length; char += 1) {
    switch (codedString[char]) {
      case 'a':
        codedString[char] = '1';
        break;
      case 'e':
        codedString[char] = '2';
        break;
      case 'i':
        codedString[char] = '3';
        break;
      case 'o':
        codedString[char] = '4';
        break;
      case 'u':
        codedString[char] = '5';
        break;
    }
  }
  return codedString.join('');
}

function decode(stringToDecode) {
  let codedString = stringToDecode.split('');

  for (let char = 0; char < codedString.length; char += 1) {
    switch (codedString[char]) {
      case '1':
        codedString[char] = 'a';
        break;
      case '2':
        codedString[char] = 'e';
        break;
      case '3':
        codedString[char] = 'i';
        break;
      case '4':
        codedString[char] = 'o';
        break;
      case '5':
        codedString[char] = 'u';
        break;
    }
  }
  return codedString.join('');
}

// Desafio 10
function techList(arrayList, name) {
  if (arrayList.length === 0) {
    return 'Vazio!';
  }

  let arrayTech = [];
  arrayList.sort();

  for (let tech of arrayList) {
    arrayTech.push(
      {
        tech,
        name,
      },
    );
  }
  return arrayTech;
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let comparisonArray = arrayNumbers.slice();
  comparisonArray.sort();
  let numberToCompare = comparisonArray[0];
  let countNumber = 0;

  for (let num in comparisonArray) {
    if (comparisonArray[num] === numberToCompare) {
      countNumber += 1;

      if (countNumber >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    } else {
      numberToCompare = comparisonArray[num];
      countNumber = 1;
    }
  }

  let formattedNumber = [];

  for (let index in arrayNumbers) {
    if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    if (index === '0') {
      formattedNumber.push('(');
    } else if (index === '2') {
      formattedNumber.push(')');
      formattedNumber.push(' ');
    } else if (index === '7') {
      formattedNumber.push('-');
    }
    formattedNumber.push(arrayNumbers[index]);
  }
  return formattedNumber.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC);
}

// Desafio 13
function hydrate(string) {
  const numbers = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
  };

  let count = 0;

  for (let char of string) {
    for (let num in numbers) {
      if (char === numbers[num]) {
        count += Number(char);
      }
    }
  }
  return (count === 1) ? '1 copo de água' : `${count} copos de água`;
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
