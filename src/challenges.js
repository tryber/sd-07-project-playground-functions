// Desafio 1
function compareTrue(and1, and2) {
  if (and1 === true && and2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let arrayString = [];
  let word = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === ' ') {
      arrayString.push(word);
      word = '';
    } else {
      word += string[i];
    }
  }
  arrayString.push(word);
  return arrayString;
}

// Desafio 4
function concatName(array) {
  let result = '';
  result += `${array[array.length - 1]}`;
  result += ', ';
  result += `${array[0]}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let highest = 0;
  let highestReps = 0;

  for (let i in numbers) {
    if (numbers[i] > highest) {
      highest = numbers[i];
      highestReps = 0;
    }
    if (numbers[i] === highest) {
      highestReps += 1;
    }
  }
  return highestReps;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let result;
  if (distCat1 === distCat2) {
    result = 'os gatos trombam e o rato foge';
  } else if (distCat1 < distCat2) {
    result = 'cat1';
  } else {
    result = 'cat2';
  }
  return result;
}

// Desafio 8
function fizzOrBuzz(element) {
  if (element % 3 === 0) {
    return 'fizz';
  } else if (element % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(numbers) {
  let result = [];

  for (let i in numbers) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      result.push('fizzBuzz');
    } else {
      result.push(fizzOrBuzz(numbers[i]));
    }
  }
  return result;
}

// Desafio 9
function codeWriting(letter) {
  let encoded = '';
  let values = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  }
  for (let j in values) {
    if (letter === j) {
      encoded = values[j];
      break;
    }
    if (j === 'u') {
      encoded = letter;
    }
  }
  return encoded;
}

function encode(string) {
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    result += codeWriting(string[i]);
  }
  return result;
}

function decode(string) {
  let decodification = '';
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case '1':
        decodification += 'a';
        break;
      case '2':
        decodification += 'e';
        break;
      case '3':
        decodification += 'i';
        break;
      case '4':
        decodification += 'o';
        break;
      case '5':
        decodification += 'u';
        break;
      default:
        decodification += string[i]
        break;
    }
  }
  return decodification;
}

// Desafio 10
function techList(techs, name) {
  let result = [];
  let techsArray = techs;

  if (techs.length === 0) {
    result = 'Vazio!';
    return result;
  }

  techsArray.sort(); // techs em ordem alfabética

  for (let i = 0; i < techsArray.length; i += 1) {
    let tech = techsArray[i];
    result[i] = { tech, name };
  }
  return result;
}

// Desafio 11
function checkLimits(nList) {
  for (let i in nList) {
    if (nList[i] < 0 || nList[i] > 9) {
      return false;
    }
  }
  return true;
}

function getRepCount(n, nList) {
  let repetitions = 0;
  for (let i = 0; i < nList.length; i += 1) {
    if (n === nList[i]) {
      repetitions += 1;
    }
  }
  return repetitions;
}

function checkRepetitions(nList) {
  for (let i = 0; i < nList.length; i += 1) {
    if (getRepCount(nList[i], nList) >= 3) {
      return false;
    }
  }
  return true;
}

function checkNumbers(nList) {
  if (checkLimits(nList) === true && checkRepetitions(nList) === true) {
    return true;
  }
  return false;
}

function writeNumbers(nList) {
  let result = '(';
  for (let i = 0; i < nList.length; i += 1) {
    if (i === 2) {
      result = `${result}) ${nList[i]}`;
    } else if (i === 7) {
      result = `${result}-${nList[i]}`;
    } else {
      result += nList[i];
    }
  }
  return result;
}

function generatePhoneNumber(numbers) {
  let result;
  if (numbers.length !== 11) {
    result = 'Array com tamanho incorreto.';
    return result;
  }
  if (checkNumbers(numbers) === true) {
    result = writeNumbers(numbers);
    return result;
  }
  result = 'não é possível gerar um número de telefone com esses valores';
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result;

  let bigger = Math.max(lineA, lineB, lineC);

  if (bigger * 2 < lineA + lineB + lineC) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 13
function hydrate(drinks) {
  let result;
  let NumberOfDrinks = drinks.match(/\d+/g).map(Number);  //  linha de código retirada da internet https://stackoverflow.com/questions/53897373/js-how-to-got-the-sum-of-numbers-from-a-string
  let sum = 0;

  for (let i = 0; i < NumberOfDrinks.length; i += 1) {
    sum += NumberOfDrinks[i];
  }

  if (sum === 1) {
    result = `${sum} copo de água`;
  } else {
    result = `${sum} copos de água`;
  }
  return result;
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
