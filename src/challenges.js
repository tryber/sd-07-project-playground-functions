// Desafio 1
function compareTrue(first, second) {
  if (first === true && second === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = base * height
  return area / 2
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ")
  return array
}

// Desafio 4
function concatName(palavras) {
  return `${palavras[palavras.length - 1]}, ${palavras[0]}`
}

// Desafio 5
function footballPoints(wins, ties) {
  wins * 3
  let pontos = (wins*3) + ties
  return pontos
}

// Desafio 6
function highestCount(numbers) {
  let highest = 0
  let counter = 0
  for (let i = 0; i < numbers.length; i++) {
    if (highest < numbers[i]) {
      highest = numbers[i]
      counter = 1
    } else if (highest === numbers[i]) {
      counter += 1;
    }
  }
  return counter
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) return 'cat1';
  else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(exp) {
  let numbersExp = [];
for (let i = 0; i < exp.length; i += 1) {
    if (exp[i] % 3 == 0 && exp[i] % 5 == 0) {
        numbersExp[i] = 'fizzBuzz'
} else if (exp[i] % 3 == 0) {
  numbersExp[i] = 'fizz'
} else if(exp[i] % 5 == 0) {
  numbersExp[i] = 'buzz'
} else {
  numbersExp[i] = 'bug!'
}
}
return numbersExp
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(name, array) {
  let arrayOrganizada = array.sort()
  let techsOrdened = []
  
  if (array.length === 0) {
    return 'Vazio!'
  }

  for (let key in arrayOrganizada) {
    if (key.length !== 0) {
      let objeto = {
        tech: arrayOrganizada[key],
        name,
      }
      techsOrdened.push(objeto)
    }
  }

  return techsOrdened
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
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
