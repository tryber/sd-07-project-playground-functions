// Desafio 1
function compareTrue(boolean1, boolean2) {
  let equalBollean;
  if (boolean1 === true && boolean2 === true) {
    equalBollean = true;
  } else {
    equalBollean = false;
  }
  return equalBollean;
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
function splitSentence(stringSentence) {
  let splitArray = stringSentence.split(' ');
  return splitArray;
}

// Desafio 4
function concatName(stringsArray) {
  return `${stringsArray[stringsArray.length - 1]}, ${stringsArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victory = 3;
  let draw = 1;
  let points = (wins * victory) + (ties * draw);
  return points;
}

// Desafio 6
function highestCount(numbersArray) {
  let counter = 0;
  let highNumber = numbersArray[0];
  for (let i in numbersArray) {
    for (let j in numbersArray) {
      if (numbersArray[j] > highNumber) {
        highNumber = numbersArray[j];
      }
    }

    if (numbersArray[i] === highNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat2);
  let successfulCatch;

  if (positionCat1 > positionCat2) {
    successfulCatch = 'cat2';
  } else if (positionCat2 > positionCat1) {
    successfulCatch = 'cat1';
  } else if (positionCat1 === positionCat2) {
    successfulCatch = 'os gatos trombam e o rato foge';
  }
  return successfulCatch;
}

// Desafio 8
function fizzBuzz(evenOddArray) {
  let array = [];

  for (let i in evenOddArray) {
    if (evenOddArray[i] % 3 === 0 && evenOddArray[i] % 5 === 0) {
      evenOddArray[i] = 'fizzBuzz';
    } else if (evenOddArray[i] % 3 === 0) {
      evenOddArray[i] = 'fizz';
    } else if (evenOddArray[i] % 5 === 0) {
      evenOddArray[i] = 'buzz';
    } else {
      evenOddArray[i] = 'bug!';
    }
    array.push(evenOddArray[i]);
  }

  return array;
}

// Desafio 9
function encode(string1) {
  // Objetc destructing: inicializando um objeto
  let letters = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  // Método .replace() com 'regular expression', qlqr das alternativas(|), global(g), com arrow function
  let encodeString = string1.replace(/a|e|i|o|u/g, match => letters[match]);
  return encodeString;
}

function decode(string2) {
  let numbers = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let decodeString = string2.replace(/1|2|3|4|5/g, function subs(matched) {
    return numbers[matched];
  });

  return decodeString;
}

// Desafio 10
function techList(techArray, name) {
  let newTechArray = techArray.sort();
  let techObject = {};
  let array = [];

  if (newTechArray.length === 0) {
    techObject = 'Vazio!';
  } else {
    for (let i = 0; i < newTechArray.length; i += 1) {
      // techObject = {
      //   tech: newTechArray[i],
      //   name: `${name}`,
      // };
      // array.push(techObject);
      techObject.tech = newTechArray[i];
      techObject.name = name;
      array.push(Object.assign({}, techObject)); 
    } 
    techObject = array;
  }
  
  return techObject;
}

// Desafio 11
// Função auxiliar: qtas vezes número repetido aparece
function repeatedNumber(repNum) {
  let counterMax = 0;

  for (let i in repNum) {
    let counter = 0;
    for (let j in repNum) {
      if (repNum[j] === repNum[i]) {
        counter += 1;
      } 
    }
    
    if (counter > counterMax){
      counterMax = counter;
    }
  }

  return counterMax;
}

function generatePhoneNumber(phoneArray) {
  let phoneNumbers;
  
  if (phoneArray.length != 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i in phoneArray) {
    if (phoneArray[i] < 0 || phoneArray[i] > 9 || repeatedNumber(phoneArray) >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    
    let phoneString = phoneArray.join('');
    phoneNumbers = `(${phoneString.substring(0,2)}) ${phoneString.substring(2,7)}-${phoneString.substring(7)}`;  
  }
  
  return phoneNumbers;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let cond1 = (lineA < lineB + lineC) && (lineB < lineC + lineA) && (lineC < lineB + lineA);
  let cond2 = (lineB > Math.abs(lineC - lineA)) && (lineC > Math.abs(lineB - lineA)) && (lineA > Math.abs(lineB - lineC));

  return cond1 && cond2;
}

// Desafio 13
function hydrate(string) {
  let arrayNumbers = [];

  for(let i = 0; i < string.length; i += 1){
    switch(string[i]){
      case '1':
        arrayNumbers.push(1);
        break;
      case '2':
        arrayNumbers.push(2);
        break;
      case '3':
        arrayNumbers.push(3);
        break; 
      case '4':
        arrayNumbers.push(4);
        break;
      case '5':
        arrayNumbers.push(5);
        break;
      case '6':
        arrayNumbers.push(6);
        break;
      case '7':
        arrayNumbers.push(7);
        break;
      case '8':
        arrayNumbers.push(8);
        break;
      case '9':
        arrayNumbers.push(9);
        break;                   
    }
  }

  let sumNumbers = 0;
  if(arrayNumbers.length == 1 && arrayNumbers[0] == 1) {
    return "1 copo de água";
  } else {
    for(let i = 0; i < arrayNumbers.length; i += 1) {
      sumNumbers += arrayNumbers[i];
  }
  return sumNumbers + " copos de água";    
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
}
