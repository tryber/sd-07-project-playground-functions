// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  let compare = a && b
  return compare
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(a) {
  // seu código aqui
  return a.split(' ');
}

// Desafio 4
function concatName(a) {
  // seu código aqui
  let newString = '';
  for (let i = 0; i < a.length; i += 1) {
    if (i === a.length - 1) {
      newString += a[i]
    }
  }
  // let stringReturn = newString + ', ' + a[0];
  // Troca por template literal
  let stringReturn = `${newString}, ${a[0]}`
  return stringReturn
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  wins *= 3;
  return wins + ties;
}

// Desafio 6
function highestCount(a) {
  let highNumber = 0;
  let highCountNumber = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (highNumber < a[i]) {
      highNumber = a[i]
      highCountNumber = 1
    } else if (highNumber === a[i]) {
      highCountNumber += 1;
    }
  }
  return highCountNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;

  if (distanceCat1 < 0) {
    distanceCat1 *= -1;
  }
  if (distanceCat2 < 0) {
    distanceCat2 *= -1;
  }

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzzOuthers(item) {
  if (item % 5 === 0) {
    return 'buzz'
  } else if (item % 3 === 0) {
    return 'fizz'
  }
  return 'bug!'
}
function fizzBuzz(a) {
  // seu código aqui
  let message = [];
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] % 3 === 0 && a[i] % 5 === 0) {
      message.push('fizzBuzz')
    } else {
      message.push(fizzBuzzOuthers(a[i]))
    }
  }
  return message;
}

// Desafio 9
function encode(a) {
  // seu código aqui
  let encodeString = '';
  for (let i = 0; i < a.length; i += 1) {
    switch (a[i]) {
      case 'a':
        encodeString += 1;
        break;
      case 'e':
        encodeString += 2;
        break;
      case 'i':
        encodeString += 3;
        break;
      case 'o':
        encodeString += 4;
        break;
      case 'u':
        encodeString += 5;
        break;
      default:
        encodeString += a[i]
    }
  }
  return encodeString;
}
function decode(b) {
  // seu código aqui
  let decodeString = '';
  for (let i = 0; i < b.length; i += 1) {
    switch (b[i]) {
      case '1':
        decodeString += 'a';
        break;
      case '2':
        decodeString += 'e';
        break;
      case '3':
        decodeString += 'i';
        break;
      case '4':
        decodeString += 'o';
        break;
      case '5':
        decodeString += 'u';
        break;
      default:
        decodeString += b[i]
    }
  }
  return decodeString;
}

// Desafio 10
function techList(array, name) {
  // seu código aqui
  if (array.length === 0) {
    return 'Vazio!'
  }
  const arraySorted = array.sort()
  let objectTechs = []
  for (let key in arraySorted) {
    if (key.length !== 0) {
      let object = {
        tech: arraySorted[key],
        name,
      }
      objectTechs.push(object)
    }
  }
  return objectTechs
}

// Desafio 11
let numbersForPhones = [1, 1, 9, 8, 7, 3, 8, 9, 0, 0, 5]

function checkKeys(value) {
  if (value < 0 || value > 9) {
    return true
  }
  return false
}
function checkValues(value) {
  return value > 2;
}
function phoneNumberIteration(a) {
  let coutNumbers = a.reduce(function (allItensArray, itemArray) {
    if (itemArray in allItensArray) {
      allItensArray[itemArray] += 1
    } else {
      allItensArray[itemArray] = 1
    }
    return allItensArray
  }, {})
  let filterNumbersInKeys = Object.keys(coutNumbers).filter(checkKeys).length
  let filterNumbersInValues = Object.values(coutNumbers).filter(checkValues).length
  let allCheck = !filterNumbersInKeys && !filterNumbersInValues
  return allCheck
}
function generatePhoneNumber(a) {
  // seu código aqui
  if (a.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  let checkReport = phoneNumberIteration(a)
  if (!checkReport) {
    return 'não é possível gerar um número de telefone com esses valores'
  }
  let phoneAreacode = a.splice(0, 2).join('')
  let phonePrefix = a.splice(0, 5).join('')
  let phoneEndNumbers = a.splice(0, 4).join('')
  let phoneComplete = `(${phoneAreacode}) ${phonePrefix}-${phoneEndNumbers}`
  return phoneComplete
}
console.log(generatePhoneNumber(numbersForPhones))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let absValueAB = Math.abs(lineA - lineB)
  let absValueAC = Math.abs(lineA - lineC)
  let absValueBC = Math.abs(lineB - lineC)

  if (lineA < lineB + lineC && absValueBC < lineA) {
    return true
  } else if (lineB < lineA + lineC && absValueAC < lineB) {
    return true
  } else if (lineC < lineA + lineB && absValueAB < lineC) {
    return true
  }
  return false
}

// Desafio 13
function hydrate(a) {
  let strSeparated = a.match(/\d/g)
  let numOfReturn = 0
  let strReturn = ''
  for (let i = 0; i < strSeparated.length; i += 1) {
    let strForNumber = parseInt(strSeparated[i], 10)
    if (Number.isInteger(strForNumber)) {
      numOfReturn += strForNumber
    }
  }
  if (numOfReturn > 1) {
    strReturn = `${numOfReturn} copos de água`
    return strReturn
  }
  strReturn = `${numOfReturn} copo de água`
  return strReturn
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
