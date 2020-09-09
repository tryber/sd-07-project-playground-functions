
function compareTrue(boole1,boole2) {
  if (boole1 && boole2 === true)
    return true
  else {
    return false
  }
}

function calcArea(base,height) {
    let areaResult = (base * height) / 2
    return areaResult
  }

function splitSentence(frase) {
 let array = frase.split(' ')
 return array
}


function concatName(array) {
  let trocaString = (array[array.length - 1] + ', ' + array[0])
  return trocaString
}

function footballPoints(wins, ties) {
  let Points = (3 * wins) + ties
  return Points
}


function highestCount(numbers) {
  let maior = numbers[0]
  repeticoes = {}
  for(let i = 0;i < numbers.length;i += 1){
    const elemento = numbers[i]
    if(repeticoes[elemento]) {
      repeticoes[elemento] += 1
    } else {
      repeticoes[elemento] = 1
    }
    if (maior < elemento) {
      maior = elemento
    } 
  }  
  return repeticoes[maior]
}

// Desafio 7



function catAndMouse(mouse, cat1, cat2) {
  const dist1 = Math.abs(mouse - cat1) 
  const dist2 = Math.abs(mouse - cat2) 
  if ( dist1 < dist2 ) {
    return 'cat1'
  } else if ( dist1 > dist2 ) {
    return 'cat2'
  }else {
    return 'os gatos trombam e o rato foge'
    
  }
}



function fizzBuzz(numbers) {
  resultado = []
  for (let i = 0; i < numbers.length; i += 1){
    elemento = numbers[i]
    if (elemento % 3 === 0 && elemento % 5 ===0) {
      resultado.push('fizzBuzz')
    } else if (elemento % 5 === 0) {
      resultado.push('buzz')
    } else if (elemento % 3 ===0) {
      resultado.push('fizz')
    } else {
      resultado.push('bug!')
    }
    console.log(resultado)  
  }
  return resultado
}


// Desafio 9

string = 'be trybe'

function encode(string) {
  array = string.split('')
  newArray = []
  for (i = 0;i < array.length;i += 1) {
    elemento = array[i]
    if (elemento === 'a') {
      newArray.push(1)
    } else if (elemento === 'e') {
      newArray.push(2)
    } else if (elemento === 'i') {
      newArray.push(3)
    } else if (elemento === 'o') {
      newArray.push(4)
    }
  }
  return
} 
encode(string)

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
