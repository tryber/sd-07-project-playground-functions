// Desafio 1
function compareTrue(number1, number2) {
  let isTrue = (number1 === true && number2 === true)
  return isTrue
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2
  return area
}
// Desafio 3
function splitSentence(text) {
  let initialArray = text.split(' ')
  let finalArray = []

  for (let counter = 0; counter <= initialArray.length - 1; counter += 1) {
    if (initialArray[counter] !== '') {
      finalArray.push(initialArray[counter])
    }
  }
  return finalArray
}
// Desafio 4
function concatName(names) {
  let firstItem = names[0]
  let lastItem = names[names.length - 1]
  let resultString = `${lastItem}, ${firstItem}`
  return resultString
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoint = 3
  let tiePoint = 1
  let totalPoints = (wins * winPoint) + (ties * tiePoint)
  return totalPoints
}

// Função apoio highest Count
function greatestNumber(numbers) {
  let greatest = 0
  /* Check greatest Number */
  for (let counter = 0; counter <= numbers.length - 1; counter += 1) {
    if (counter === 0) {
      greatest = numbers[counter]
    } else if (numbers[counter] > greatest) {
      greatest = numbers[counter]
    }
  }
  return greatest
}
// Desafio 6
function highestCount(numbers) {
  let numberOfTimes = 0
  /* Count greatest Number with a greates number function*/
  for (let i in numbers) {
    if (numbers[i] === greatestNumber(numbers)) {
      numberOfTimes += 1
    }
  }
  return numberOfTimes
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1)
  let cat2Distance = Math.abs(mouse - cat2)
  let message = ''

  /* Compare Distance */
  if (cat1Distance === cat2Distance) {
    message = 'os gatos trombam e o rato foge'
  } else if (cat1Distance < cat2Distance) {
    message = 'cat1'
  } else {
    message = 'cat2'
  }
  return message
}

// Apoio para o Desafio 8
function fizzBuzzHelp(number) {
  let message = ''
  let buzzText = number % 5 === 0
  let fizzText = number % 3 === 0
  let bugText = 'bug!'

  if (buzzText) {
    message = 'buzz'
  } else if (fizzText) {
    message = 'fizz'
  } else {
    message = bugText
  }
  return message
}
// Desafio 8
function fizzBuzz(numbers) {
  let fizzBuzzList = []

  for (let number in numbers) {
    if ((numbers[number] % 3) === 0 && (numbers[number] % 5) === 0) {
      fizzBuzzList.push('fizzBuzz')
    } else {
      fizzBuzzList.push(fizzBuzzHelp(numbers[number]))
    }
  }
  return fizzBuzzList
}

// Apoio Desafio 9
function encodeCounter(vowels, letter) {
  let counterVowels = 0
  let newText = ''

  for (let indice in vowels) {
    if (letter === indice) {
      newText = vowels[indice]
      counterVowels += 1
    }
  }
  let message = [counterVowels, newText]
  return message
}

// Desafio 9
function encode(word) {
  let finalString = ''
  let vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  for (let counter = 0; counter <= word.length - 1; counter += 1) {
    let currentLetter = word[counter]
    /* CounterVogais calls a function that will return a string and number*/
    let counterVogais = encodeCounter(vogais, currentLetter)
    if (counterVogais[0] > 0) {
      finalString += counterVogais[1]
    } else {
      finalString += currentLetter
    }
  }
  return finalString
}
function decode(word) {
  let finalString = ''
  let vogais = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  }
  for (let counter = 0; counter <= word.length - 1; counter += 1) {
    let currentItem = word[counter]
    let counterItem = encodeCounter(vogais, currentItem)
    if (counterItem[0] > 0) {
      finalString += counterItem[1]
    } else {
      finalString += currentItem
    }
  }
  return finalString
}

// Desafio 10
function techList(tech, name) {
  let newTechList = []
  let sortedTechList = tech.sort()
  let message = ''

  for (let item = 0; item <= sortedTechList.length - 1; item += 1) {
    let newTechItem = {
      tech: sortedTechList[item],
      name: `${name}`,
    };
    newTechList.push(newTechItem)
  }
  if (newTechList.length > 0) {
    message = newTechList
  } else {
    message = 'Vazio!'
  }
  return message
}

// Suporte Desafio 11
function numberGreaterNineLessZero(numbers) {
  let message = ''
  /* Checking if there is any number less than 0 or greater than nine */
  for (let number in numbers) {
    if (numbers[number] > 9 || numbers[number] < 0) {
      message = 'não é possível gerar um número de telefone com esses valores'
    }
  }
  return message
}

// Suporte Desafio 11
function checkConstraints(numbers) {
  let message = 'No constraints'
  let messageError = 'não é possível gerar um número de telefone com esses valores'
  /* Checking if the arrays.lenght is greater than 11 */
  if (numbers.length !== 11) {
    message = 'Array com tamanho incorreto.'
  } else if (numberGreaterNineLessZero(numbers) === messageError) {
    message = messageError
  }
  return message
}

// Suporte Desafio 11 - count repeated
function mostRepeatedNumber(numbers) {
  let mostRepeated = 0
  /* Checking if any number repeats greater or equal 3*/
  numbers.forEach((element) => {
    let numberOfTimesRepeat = 0
    for (let j in numbers) {
      if (element === numbers[j]) {
        numberOfTimesRepeat += 1
      }
      if (numberOfTimesRepeat > mostRepeated) {
        mostRepeated = numberOfTimesRepeat
      }
    }
  })
  return mostRepeated
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let constraints = checkConstraints(numbers)
  let message = ''

  if (constraints !== 'No constraints') {
    message = constraints
  } else if (mostRepeatedNumber(numbers) >= 3) {
    message = 'não é possível gerar um número de telefone com esses valores'
  } else {
    /* Generating phone-number in the right format*/
    let phoneNumber = `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`
    message = phoneNumber
  }
  return message
}
console.log(generatePhoneNumber([1, 2, 3, 1, 5, 6, 7, 8, 9, 0, 1]))
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lineACheck = (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC))
  let lineBCheck = (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC))
  let lineCCheck = (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA))
  let isTriangle = (lineACheck && lineBCheck && lineCCheck === true)

  return isTriangle
}

// Desafio 13
function hydrate(text) {
  let drinkList = text.replace(/\D/g, '')
  let total = 0
  let message = ''

  for (let counter = 0; counter <= drinkList.length - 1; counter += 1) {
    total += parseInt(drinkList[counter], 10)
  }

  if (total > 1) {
    message = `${total} copos de água`
  } else {
    message = `${total} copo de água`
  }
  return message
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
