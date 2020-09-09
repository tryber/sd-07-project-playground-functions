// Desafio 1
function compareTrue(a, b) {
  return a === true && b === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(separator) {
  return separator.split(' ');
}

// Desafio 4
function concatName(arrayStrings) {
  let last = arrayStrings[arrayStrings.length - 1];
  let first = arrayStrings[0];
  return `${last}, ${first}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayNum) {
  let highest = Math.max.apply(null, arrayNum);
  let highestArrayNum = 0;
  for (let i in arrayNum) {
    if (highest === arrayNum[i]) {
      highestArrayNum += 1;
    }
  }
  return highestArrayNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1Distance < cat2Distance) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  let arrayReturn = [];
  for (let i = 0; i < arrayFizzBuzz.length; i += 1) {
    let fizz = arrayFizzBuzz[i] % 3 === 0;
    let buzz = arrayFizzBuzz[i] % 5 === 0;
    let fizbuz = arrayFizzBuzz[i] % 15 === 0;
    if (fizbuz) {
      arrayReturn[i] = 'fizzBuzz';
    } else if (fizz) {
      arrayReturn[i] = 'fizz';
    } else if (buzz) {
      arrayReturn[i] = 'buzz';
    } else {
      arrayReturn[i] = 'bug!';
    }
  }
  return arrayReturn;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

function encodeDecode(string, searching, replacing) {
  for (let i = 0; i < 5; i += 1) {
    for (let j = 1; j < string.length; j += 1) {
      string = string.replace(searching[i], replacing[i]);
    }
  }
  return string;
}

// Desafio 9
function encode(string) {
  let searching = ['a', 'e', 'i', 'o', 'u'];
  let replacing = ['1', '2', '3', '4', '5'];
  return encodeDecode(string, searching, replacing);
}
console.log(encode('hi there!'));

function decode(string) {
  let replacing = ['a', 'e', 'i', 'o', 'u'];
  let searching = ['1', '2', '3', '4', '5'];
  return encodeDecode(string, searching, replacing);
}
console.log(decode('h3 th2r2!'));

// Desafio 10
function techList(techName, name) {
  techName.sort();
  let techNameList = [];
  if (techName.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < techName.length; i += 1) {
    techNameList[i] = {
      tech: `${techName[i]}`,
      name: `${name}`,
    };
  }
  return techNameList;
}

function phoneFormat(phoneNum) {
  let phoneForm =
    `(${phoneNum[0]}` +
    `${phoneNum[1]}) ` +
    `${phoneNum.slice(2, 7).join('')}` +
    `-${phoneNum.slice(7, 12).join('')}`;
  return phoneForm;
}

// Desafio 11
function generatePhoneNumber(phoneNum) {
  let repeat3 = 0;
  let notArrayLength = phoneNum.length !== 11;
  if (notArrayLength) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < phoneNum.length; i += 1) {
    let notPossible = phoneNum[i] < 0 || phoneNum[i] > 9;
    repeat3 = 0;
    if (notPossible) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let j = 0; j < phoneNum.length; j += 1) {
      let repetition = phoneNum[i] === phoneNum[j];
      if (repetition) {
        repeat3 += 1;
      }
    }
    if (repeat3 >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return phoneFormat(phoneNum);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lineACondition = Math.abs(lineB - lineC) > lineA || lineA > lineB + lineC;

  let lineBCondition = Math.abs(lineA - lineC) > lineB || lineB > lineA + lineC;

  let lineCCondition = Math.abs(lineA - lineB) > lineC || lineC > lineA + lineB;

  if (lineACondition || lineBCondition || lineCCondition) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(water) {
  let waterNum = water.match(/\d/g);
  let waterCount = 0;
  for (let i = 0; i < waterNum.length; i += 1) {
    waterCount += parseInt(waterNum[i], 10);
  }
  if (waterCount > 1) {
    return `${waterCount} copos de água`;
  }
  return `${waterCount} copo de água`;
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

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
