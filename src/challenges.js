// Desafio 1 - OK
function compareTrue(bolean1, bolean2) {
  // seu código aqui
  return (bolean1 && bolean2);
}

// Desafio 2 - OK
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);
}

// Desafio 3 - OK
function splitSentence(texto) {
  // seu código aqui
  return (texto.split(' '));
}

// Desafio 4 - OK
function concatName(arrayString) {
  // seu código aqui
  return (`${arrayString[arrayString.length - 1]}, ${arrayString[0]}`);
}

// Desafio 5 - OK
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + ties);
}

// Desafio 6 - OK
function highestCount(arrayNumeros) {
  // seu código aqui
  let count = 0;
  let highNumber = Math.max.apply(null, arrayNumeros);

  for (let i = 0; i < arrayNumeros.length; i += 1) {
    if (arrayNumeros[i] === highNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7 - OK
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8 - OK
function fizzBuzz(arrayNumeros) {
  // seu código aqui
  let arrayString = [];

  for (let i = 0; i < arrayNumeros.length; i += 1) {
    switch (true) {
      case ((arrayNumeros[i] % 3 === 0) && (arrayNumeros[i] % 5 === 0)):
        arrayString.push('fizzBuzz');
        break;
      case (arrayNumeros[i] % 3 === 0):
        arrayString.push('fizz');
        break;
      case (arrayNumeros[i] % 5 === 0):
        arrayString.push('buzz');
        break;
      default:
        arrayString.push('bug!');
        break;
    }
  }
  return arrayString;
}

// Desafio 9 - OK
function encode(arrayWithVowels) {
  // seu código aqui
  let newString = '';
  for (let i = 0; i < arrayWithVowels.length; i += 1) {
    switch (arrayWithVowels[i]) {
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
        newString += arrayWithVowels[i];
    }
  }
  return newString;
}

function decode(arrayWithNumbers) {
  // seu código aqui
  let newStringDec = arrayWithNumbers;

  newStringDec = newStringDec.replace(/['1']/g, 'a');
  newStringDec = newStringDec.replace(/['2']/g, 'e');
  newStringDec = newStringDec.replace(/['3']/g, 'i');
  newStringDec = newStringDec.replace(/['4']/g, 'o');
  newStringDec = newStringDec.replace(/['5']/g, 'u');

  return newStringDec;
}

// Desafio 10 - OK
function techList(arrayTech, name) {
  // seu código aqui

  if (arrayTech.length === 0) {
    return 'Vazio!';
  }

  let arraySorting = arrayTech.sort();

  let arrayWithInformation = [];

  for (let i = 0; i < arraySorting.length; i += 1) {
    arrayWithInformation[i] = {
      tech: arraySorting[i],
      name: name };
  }
  return arrayWithInformation;
}

// Desafio 11
function generatePhoneNumber(arrayNumber) {
  // seu código aqui

  if (arrayNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let count = 0;

  for (let i = 0; i < arrayNumber.length; i += 1) {
    count = 0;
    for (let j = 0; j < arrayNumber.length; j += 1) {
      if (arrayNumber[j] === arrayNumber[i]) {
        count += 1;
      }
    }

    if (count >= 3 || arrayNumber[i] < 0 || arrayNumber[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  arrayNumber = arrayNumber.join('');

  let phoneNumber = `(${arrayNumber.slice(0, 2)}) ${arrayNumber.slice(2, 7)}-${arrayNumber.slice(7, 11)}`;

  return phoneNumber;
}

// Desafio 12 - OK
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let validaLineA = ((lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC)));
  let validaLineB = ((lineB < (lineA + lineC)) && (lineB > Math.abs(lineA - lineC)));
  let validalineC = ((lineC < (lineA + lineB)) && (lineC > Math.abs(lineA - lineB)));

  if (validaLineA && validaLineB && validalineC) {
    return true;
  }
  return false;
}

// Desafio 13 - OK
function hydrate(stringText) {
  // seu código aqui
  let result = stringText.split(' ');
  let coposDeAgua = 0;

  for (let i = 0; i < result.length; i += 1) {
    if (Number.isInteger(+result[i])) {
      coposDeAgua += +result[i];
    }
  }

  if (coposDeAgua > 1) {
    return `${coposDeAgua} copos de água`;
  }
  return `${coposDeAgua} copo de água`;
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
