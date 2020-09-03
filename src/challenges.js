// Desafio 1
function compareTrue(primeiroBooleano, segundoBooleano) {
  // seu código aqui
  if (primeiroBooleano && segundoBooleano) {
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = 0
  area = (base * height) / 2

  return area
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let converteArray = 0
  converteArray = frase.split(' ');
  return converteArray
}

// Desafio 4
function concatName(nomes) {
  // seu código aqui
  let objeto = {
    ultimo: nomes[nomes.length - 1],
    meio: ', ',
    primeiro: nomes[0],
  }

  return objeto.ultimo + objeto.meio + objeto.primeiro
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = 0
  pontos = ((wins * 3) + ties)
  return pontos
}

// Desafio 6
function highestCount(lista) {
  // seu código aqui
  lista.sort();
  let maior = 0
  maior = lista[lista.length - 1]

  let repeticao = 0

  for (let x in lista) {
    if (maior === lista[x]) {
      repeticao += 1
    }
  }
  return repeticao
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = 0
  let distanciaCat2 = 0
  let resultado = 0

  if (mouse > cat1) {
    distanciaCat1 = (cat1 - mouse)
  }
  if (mouse < cat1) {
    distanciaCat1 = (mouse - cat1)
  }
  if (mouse > cat2) {
    distanciaCat2 = (cat2 - mouse)
  }
  if (mouse < cat2) {
    distanciaCat2 = (mouse - cat2)
  }
  if (distanciaCat1 > distanciaCat2) {
    resultado = 'cat1'
  }
  if (distanciaCat2 > distanciaCat1) {
    resultado = 'cat2'
  }
  if ((cat1 === cat2) || (distanciaCat2 === distanciaCat1)) {
    resultado = 'os gatos trombam e o rato foge'
  }
  return resultado
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let FizzBuzz = []
  for (let i = 0; i < numeros.length; i += 1) {
    if (((numeros[i] % 3) === 0) && ((numeros[i] % 5) === 0)) {
      FizzBuzz.push('fizzBuzz')
    } else if ((numeros[i] % 3) === 0) {
      FizzBuzz.push('fizz')
    } else if ((numeros[i] % 5) === 0) {
      FizzBuzz.push('buzz')
    } else FizzBuzz.push('bug!')
  }
  return FizzBuzz
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
