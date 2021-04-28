// Desafio 1
function compareTrue(a, b) {
  if (a && b) return true
  return false
}

// Desafio 2
function calcArea(base, height) {
  if (base > 0 && height > 0) {
    return (base * height) / 2;
  }
  return 'Digite um valor válido'
}

// Desafio 3
function splitSentence(str) {
  return str.split(/[ ,]+/);
}

// Desafio 4
function concatName(arrayStr) {
  const first = arrayStr[0];
  const last = arrayStr [arrayStr.length-1];
  return `${first} ${last}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  if (wins >= 0 && ties >= 0) {
    const winsTotal = wins * 3;
    return winsTotal + ties;
  }
  return 'Favor verifique os dados inseridos'
}

// Desafio 6
function highestCount(numbers) {
  numbers.sort((e,f) => f-e);
  if (numbers.length > 0) {
    let biggest = 0;
    let counts = 0;
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] >= biggest) {
        biggest = numbers[i];
        counts += 1;
      }
    }
    return counts;
  }
  return 'Favor verifique os dados inseridos'
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {;
  if (mouse - cat1 === mouse - cat2) {
    return 'os gatos trombam e o rato foge'
  }
  if (mouse - cat1 > mouse - cat2) {
    return 'cat2'
  }
  return 'cat1';
}

function fizzBuzzHelper(numbersArr) {
  let nStr = '';
  let nArr = [];
  for (let i = 0; i < numbersArr.length; i += 1) {
    if (numbersArr[i] % 5 === 0 && numbersArr[i] % 3 === 0) {
      nStr = 'fizzBuzz';
    } else if (numbersArr[i] % 5 === 0) {
      nStr = 'buzz';
    } else if (numbersArr[i] % 3 === 0) {
      nStr = 'fizz';
    } else {
      nStr = 'bug!';
    }
    nArr.push(nStr);
  }
  return nArr
}

// Desafio 8
function fizzBuzz(numbersArr) {
  if (numbersArr.length > 0) {
    fizzBuzzHelper(numbersArr);
  }
  return 'Favor verifique os dados inseridos'
}

// Desafio 9
function encode(myStr) {
  const vowels = myStr.replace(/a/gi, '1');
  const vowel = vowels.replace(/e/gi, '2');
  const vowe = vowel.replace(/i/gi, '3');
  const vow = vowe.replace(/o/gi, '4');
  const vo = vow.replace(/u/gi, '5');
  return vo
}

function decode(myOtherStr) {
  const myNumbers = myOtherStr.replace(/1/g, 'a');
  const myNumber = myNumbers.replace(/2/g, 'e');
  const myNumbe = myNumber.replace(/3/g, 'i');
  const myNumb = myNumbe.replace(/4/g, 'o');
  const myNum = myNumb.replace(/5/g, 'u');
  return myNum
}

// Desafio 10
function techList(tech, name) {
  let techArray = [];
  tech.sort();

  if (tech.length === 0) {
    return 'Vazio!'
  }
  for (let t in tech) {
    techArray.push({
      tech: tech[t],
      name: name,
    })
  }
  return techArray
}

function repeatCounter(phoneNumber) {
  let count = 0;
    let stop = false;
    for (let phone of phoneNumber) {
      for (let otherPhone of phoneNumber) {
        if (phone === otherPhone) {
          count += 1;
        }
      }
      if (count >= 3) {
        stop = true;
      }
      count = 0;
    }
    return stop
}

function numbersArePositiveAndLessThanNine(phoneNumber) {
  let invalid = false;
  for (let value of phoneNumber) {
    if (value < 0 || value > 9) {
      invalid = true;
    }
  }
  return invalid
}

function printPhoneNumber(phoneNumber) {
  return '(' + phoneNumber[0] + phoneNumber[1] + ') ' + phoneNumber[2] + phoneNumber[3] + phoneNumber[4] + phoneNumber[5] + phoneNumber[6] + '-' + phoneNumber[7] + phoneNumber[8] + phoneNumber[9] + phoneNumber[10]
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  if (
    repeatCounter(phoneNumber) || numbersArePositiveAndLessThanNine(phoneNumber)
  ) {
    return 'não é possível gerar um número de telefone com esses valores'
  }
  return printPhoneNumber(phoneNumber)
}

function abs(num1, num2) {
  return Math.abs(num1 - num2)
}

function sum(num1, num2) {
  return num1 + num2;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > 0 && lineB > 0 && lineC > 0) {
    if (
      (lineA < sum(lineB, lineC)) && (lineA > abs(lineB, lineC)) && (lineB < sum(lineA, lineC)) && (lineB > abs(lineA, lineC)) && (lineC < sum(lineB, lineA)) && (lineC > abs(lineA, lineB))
    ) {
      return true;
    }
    return false;
  }
  return false;
}

function hydrateHelper(drink) {
  let total = 0;
  let water = drink.match(/\d+/g).map(Number);
  // Referência acima extraída de: https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
  for (let w = 0; w < water.length; w += 1) {
    if (water.length === 1 && water[w] === 1) {
      return `${water} copo de água`
    }
    return water.reduce((total, currentElement) => total + currentElement) + ' copos de água'
    // Referência acima extraída de: https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
  }
  return total
}

// Desafio 13
function hydrate(drink) {
  if (drink.length > 0) {
    return hydrateHelper(drink);
  }
  return '0 copos de água';
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
