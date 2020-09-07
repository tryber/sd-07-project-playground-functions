// Desafio 1
function compareTrue(boolA, boolB) {
  let result = false;
  if (boolA && boolB === true) {
    result = true;
  }
  return result;
}
// Desafio 2
function calcArea(height, base) {
  let area = (base * height) / 2;
  return area;
}
// Desafio 3
function splitSentence(string) {
  let splittedSentence = string.split(' ');
  return splittedSentence;
}
// Desafio 4
function concatName(posicoesStrings) {
  let lastName = posicoesStrings[posicoesStrings.length - 1];
  let resultadoString = '';
  resultadoString = `${lastName}, ${posicoesStrings[0]}`;
  return resultadoString;
}
// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let championshipPoints = winPoints + ties;
  return championshipPoints;
}
// Desafio 6
function highestNumber(arrayNumbers) {
  let highestNumberValue = 0;
  highestNumberValue = arrayNumbers.reduce((a, b) => Math.max(a, b));
  return highestNumberValue;
}
function highestCount(arrayNumbers) {
  let countNumber = 0;
  let higherNumber = highestNumber(arrayNumbers);
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] === higherNumber) {
      countNumber += 1;
    }
  }
  return countNumber;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = '';
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  if (distanceCat1 < 0) {
    distanceCat1 = Math.abs(distanceCat1);
  }
  if (distanceCat2 < 0) {
    distanceCat2 = Math.abs(distanceCat2);
  }
  if (distanceCat2 === distanceCat1) {
    result = 'os gatos trombam e o rato foge';
  } else if (distanceCat2 < distanceCat1) {
    result = 'cat2';
  } else {
    result = 'cat1';
  }
  return result;
}
// Desafio 8
function changeNumbersForWords(number) {
  let fizzB = number % 3 === 0 && number % 5 === 0;
  let buzz = number % 5 === 0;
  let fizz = number % 3 === 0;
  switch (true) {
    case fizzB:
      return 'fizzBuzz';
    case buzz:
      return 'buzz';
    case fizz:
      return 'fizz';
    default:
      return 'bug!';
  }
}
function fizzBuzz(arrayNumbers) {
  let result = [];
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    result.push(changeNumbersForWords(arrayNumbers[i]));
  }
  return result;
}
// Desafio 9
function encode(sentence) {
  let dictionaryEncode = ['1', '2', '3', '4', '5'];
  let dictionaryDecode = ['a', 'e', 'i', 'o', 'u'];
  let codedSentence = '';
  for (let i = 0; i < sentence.length; i += 1) {
    codedSentence += sentence[i];
    for (let j = 0; j < dictionaryEncode.length; j += 1) {
      if (dictionaryDecode[j] === sentence[i]) {
        codedSentence = codedSentence.substring(0, codedSentence.length - 1);
        codedSentence += dictionaryEncode[j];
      }
    }
  }
  return codedSentence;
}
function decode(sentence) {
  let decodedSentence = '';
  for (let i = 0; i < sentence.length; i += 1) {
    switch (sentence[i]) {
      case '1':
        decodedSentence += 'a';
        break;
      case '2':
        decodedSentence += 'e';
        break;
      case '3':
        decodedSentence += 'i';
        break;
      case '4':
        decodedSentence += 'o';
        break;
      case '5':
        decodedSentence += 'u';
        break;
      default:
        decodedSentence += sentence[i];
    }
  }
  return decodedSentence;
}
// Desafio 10
function techList(arrayOfTechs, name) {
  let result = [];
  let techs = [];
  let student = '';
  student = name;
  techs = arrayOfTechs;
  techs.sort();
  if (techs.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < techs.length; i += 1) {
    result.push({
      tech: techs[i],
      name: student,
    });
  }
  return result;
}
// Desafio 11
function validateRange(arrayNumbers) {
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] < 0 || arrayNumbers[i] > 9) {
      return false;
    }
  }
  return true;
}
function validateRepeatedNumbers(arrayNumbers) {
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    let countRepeat = 0;
    for (let j = 0; j < arrayNumbers.length; j += 1) {
      if (arrayNumbers[j] === arrayNumbers[i]) {
        countRepeat += 1;
      }
    }
    if (countRepeat >= 3) {
      return false;
    }
  }
  return true;
}
function generatePhoneNumber(number) {
  let stringNumber = '';
  let validate = validateRange(number) && validateRepeatedNumbers(number);
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (!validate) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let i = 0; i < number.length; i += 1) {
    stringNumber += number[i];
  }
  return `(${stringNumber.substring(0, 2)}) ${stringNumber.substring(2, 7)}-${stringNumber.substring(7, 11)}`;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const testCase1 = lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
  const testCase2 = lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);
  const testCase3 = lineC < lineA + lineB && lineC > Math.abs(lineA - lineB);
  return testCase1 && testCase2 && testCase3;
}
// Desafio 13
function hydrate(sentence) {
  let result = '';
  let numbers = [];
  let soma = 0;
  numbers = sentence.match(/\d+/g);
  for (let i = 0; i < numbers.length; i += 1) {
    let n = Number(numbers[i]);
    soma += n;
  }
  if (soma === 1) {
    result = `${soma} copo de água`;
  } else {
    result = `${soma} copos de água`;
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
};
