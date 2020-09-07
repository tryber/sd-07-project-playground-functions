// Desafio 1
function compareTrue(booleanA, booleanB) {
  let resultado;
  if (booleanA && booleanB) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let word = '';
  let fraseArray = [];
  for (let i = 0; i < frase.length; i += 1) {
    if (frase[i] !== ' ') {
      word += frase[i];
    } else {
      fraseArray.push(word);
      word = '';
    }
  }
  fraseArray.push(word);
  return fraseArray;
}

// Desafio 4
function concatName(arrayNames) {
  let lastItem = arrayNames.length - 1;
  let lastFirst = `${arrayNames[lastItem]}, ${arrayNames[0]}`;
  return lastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victory = wins * 3;
  let sum = victory + ties;
  return sum;
}

// Função suporte para Desafio 6
function suport6(theHigh) {
  let isHigh = theHigh[0];
  for (let i = 0; i <= theHigh.length; i += 1) {
    if (theHigh[i] > isHigh) {
      isHigh = theHigh[i];
    }
  }
  return isHigh;
}


// Desafio 6
function highestCount(arrayNumbers) {
  let high = suport6(arrayNumbers);
  let repeat = 0;
  for (let index = 0; index <= arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === high) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1M = Math.abs(cat1 - mouse);
  let cat2M = Math.abs(cat2 - mouse);
  let result;
  if (cat1M === cat2M) {
    result = 'os gatos trombam e o rato foge';
  } else if (cat1M < cat2M) {
    result = 'cat1';
  } else if (cat2M < cat1M) {
    result = 'cat2';
  }
  return result;
}

// Função suporte para Desafio 8
function suport8(value) {
  let suport = '';
  if (value % 3 === 0 && value % 5 === 0) {
    suport = 'fizzBuzz';
  } else if (value % 3 === 0) {
    suport = 'fizz';
  } else if (value % 5 === 0) {
    suport = 'buzz';
  } else {
    suport = 'bug!';
  }
  return suport;
}

// Desafio 8
function fizzBuzz(arrayNum) {
  let arrayFizzBuzz = [];
  for (let i = 0; i < arrayNum.length; i += 1) {
    arrayFizzBuzz.push(suport8(arrayNum[i]));
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(paramString) {
  let newString = '';
  for (let i = 0; i <= paramString.length - 1; i += 1) {
    switch (paramString[i]) {
      case 'a':
        newString += '1';
        break;
      case 'e':
        newString += '2';
        break;
      case 'i':
        newString += '3';
        break;
      case 'o':
        newString += '4';
        break;
      case 'u':
        newString += '5';
        break;
      default:
        newString += paramString[i];
    }
  }
  return newString;
}
function decode(paramString2) { // .replace é uma função para strings
  let newString2 = paramString2; // onde tiver 1, substitua por a
  newString2 = newString2.replace(/1/g, 'a'); // Sem g, ele só substitui só o 1º 1 que encontrar
  newString2 = newString2.replace(/2/g, 'e'); // Com g, ele substitui todos os que encontrar
  newString2 = newString2.replace(/3/g, 'i');
  newString2 = newString2.replace(/4/g, 'o');
  newString2 = newString2.replace(/5/g, 'u');
  return newString2;
}

// Desafio 10
function techList(tech, firstName) {
  let endList = [];
  tech.sort();
  if (tech.length <= 0) {
    endList = 'Vazio!';
  } else {
    for (let i = 0; i < tech.length; i += 1) {
      endList.push({ tech: tech[i], name: firstName });
    }
  }
  return endList;
}

// Função suporte para Desafio 11
function suport11(phone2) {
  let firstPart = `(${phone2[0]}${phone2[1]}) `;
  for (let i = 2; i <= 6; i += 1) {
    firstPart += `${phone2[i]}`;
  }
  firstPart += '-';
  let completePhone = firstPart;
  for (let i = 7; i < phone2.length; i += 1) {
    completePhone += `${phone2[i]}`;
  }
  return completePhone;
}

// 2ª Função suporte para o Desafio 11
function suport11too(what) {
  let repetition = 0;
  for (let k = 0; k < what.length; k += 1) {
    for (let l = k + 1; l < what.length; l += 1) {
      if (what[k] === what[l]) {
        repetition += 1;
      }
    }
  }
  return repetition;
}

// Desafio 11
function generatePhoneNumber(phone) {
  let answer = '';
  let lastReturn;
  let repeat = suport11too(phone) - 1;
  for (let j = 0; j < phone.length; j += 1) {
    if (phone[j] < 0 || phone[j] > 9) {
      answer = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  if (phone.length !== 11) {
    answer = 'Array com tamanho incorreto.';
  } else if (repeat >= 3) {
    answer = 'não é possível gerar um número de telefone com esses valores';
  } else if (answer !== 'Array com tamanho incorreto.' && answer !== 'não é possível gerar um número de telefone com esses valores') {
    answer = suport11(phone);
  }
  lastReturn = answer;
  return lastReturn;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lineA2 = lineB + lineC;
  let lineB2 = lineA + lineC;
  let lineC2 = lineA + lineB;
  let different = Math.abs(lineA - lineB - lineC);
  let result;

  if (lineA < lineA2 && lineB < lineB2 && lineC < lineC2) {
    result = true;
  } else if (lineA > different && lineB > different && lineC > different) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 13
function hydrate(drinks) {
  let takeNumbers = drinks.match(/\d+/g); // encontra só os números da frase e os coloca em um array, mas eles ainda são como strings
  let justNumber = 0;
  let sum = 0;
  for (let i = 0; i < takeNumbers.length; i += 1) {
    justNumber = Number(takeNumbers[i]); // para transformar de string para número
    sum += justNumber; // para somar os números
  }
  let result;
  if (sum === 1) {
    result = '1 copo de água';
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
