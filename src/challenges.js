//Desafio 1
function compareTrue(valueA, valueB) {
  if (valueA && valueB) {
    return true;
  }
  return false;
}
//Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

//Desafio 3
function splitSentence(stringSentence) {
  let resultado = stringSentence.split(' ');
  return resultado;
}

//Desafio 4
function concatName(names) {
  let amount = names
  let last = amount[amount.length - 1]
  let first = amount[0]
  return `${last}, ${first}`;
}

//Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

//Desafio 6

function highestCount(numbers) {
  let inAscendingOrder = numbers.sort()
  let CounterRepetitions = 0;
  for (i = 0; i < inAscendingOrder.length; i += 1) {
    if (inAscendingOrder[i] === inAscendingOrder[i + 1]) {
      CounterRepetitions += 1
    } else if (inAscendingOrder[i + 1] === undefined) {
      if (inAscendingOrder[i] >= inAscendingOrder[i - 1]) {
        CounterRepetitions += 1
      }
    } else {
      CounterRepetitions = 0
    }
  }
  return CounterRepetitions
}
//Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let cat1Number = 0;
  let cat2Number = 0;
  let result = '';
  if (cat1 - mouse < 0) {
    cat1Number = (cat1 - mouse) * (-1)
  } else {
    cat1Number = cat1 - mouse
  }
  if (cat2 - mouse < 0) {
    cat2Number = (cat2 - mouse) * (-1)
  } else {
    cat2Number = cat2 - mouse
  }
  if (cat1Number < cat2Number) {
    result = 'cat1'
  } else if (cat2Number < cat1Number) {
    result = 'cat2'
  } else if (cat1Number === cat2Number) {
    result = 'os gatos trombam e o rato foge'
  }
  return result
}
//Desafio 8
function fizzBuzz(numbers) {
  for (item in numbers) {
    if (numbers[item] % 5 === 0 && numbers[item] % 3 === 0) {
      numbers[item] = 'fizzBuzz'
    } else if (numbers[item] % 5 === 0) {
      numbers[item] = 'buzz'
    } else if (numbers[item] % 3 === 0) {
      numbers[item] = 'fizz'
    } else if (numbers[item] % 5 !== 0 && numbers[item] % 3 !== 0) {
      numbers[item] = 'bug!'
    }
  }
  return numbers
}

//Desafio 9
function encode(phrase) {
  let encryptedLetters = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  let encoded = [];
  let result = '';
  for (i = 0; i < phrase.length; i += 1) {
    encoded[i] = phrase[i];
    for (let index = 0; index < encoded.length; index += 1) {
      if (encryptedLetters[encoded[i]] === undefined) {
        result += encoded[i]
        break
      } else {
        result += encryptedLetters[encoded[i]]
        break
      }
    }
  }
  return result
}

function decode(phrase) {
  let encryptedLetters = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  }
  let decoded = [];
  let result = '';

  for (i = 0; i < phrase.length; i += 1) {
    decoded[i] = phrase[i];
    for (let j = 0; j < decoded.length; j += 1) {
      if (encryptedLetters[decoded[i]] === undefined) {
        result += decoded[i]
        break
      } else {
        result += encryptedLetters[decoded[i]]
        break
      }
    }
  }
  return result
}
//Desafio 10
function techList(listArray, name) {
  let resultOfArray = []
  listArray.sort()
  for (i in listArray) {
    if (listArray.length !== 0) {
      resultOfArray.push(
        {
          tech: listArray[i],
          name: `${name}`,
        })
    }
  }
  if (listArray.length === 0) {
    return 'Vazio!'
  }
  return resultOfArray
}
//Desafio 11
function generatePhoneNumber(numbers) {
  let result = '';
  let orinalOrder = '';
  let isRepeated = 0;

  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  for (j in numbers) {
    if (numbers.length === 11) {
      orinalOrder += numbers[j]
    }
  }
  let inAscendingOrder = numbers.sort()
  for (i = 0; i < inAscendingOrder.length; i += 1) {
    if (inAscendingOrder[i] === inAscendingOrder[i + 1] || inAscendingOrder[i] === inAscendingOrder[i - 1]) {
      isRepeated += 1
    } else if (inAscendingOrder[i + 1] === undefined) {
      break
    } else {
      isRepeated = 0
    }
    if (isRepeated >= 3 || inAscendingOrder[i] < 0 || inAscendingOrder[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
    result = orinalOrder.split('')
  }

  let is1Ignored = result.splice(0, 0, '(')
  let is2Ignored = result.splice(3, 0, ')')
  let is3Ignored = result.splice(4, 0, ' ')
  let is4Ignored = result.splice(10, 0, '-')
  let final = '';
  for (k = 0; k < result.length; k += 1) {
    final += result[k]
  }
  return final
}
//Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB < lineC || lineA + lineC < lineB || lineC + lineB < lineA) {
    return false
  } else if (lineA < lineB - lineC || lineA < lineC - lineB || lineB < lineA - lineC || lineB < lineC - lineA || lineC < lineA - lineB || lineC < lineB - lineA) {
    return false
  }
  return true
}

//Desafio 13
function hydrate(drinks) {
  let numbers = drinks.match(/\d+/g).map(Number)
  let sum = 0;
  for (i = 0; i < numbers.length; i += 1) {
    sum += numbers[i]
  }
  if (sum > 1) {
    return `${sum} copos de água`
  }
  return `${sum} copo de água`
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
