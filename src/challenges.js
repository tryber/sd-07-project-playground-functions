// Desafio 1
function compareTrue(bol1, bol2) {
  if (bol1 === true && bol2 === true){
    return true;
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area
}
console.log(calcArea(3, 4));

// Desafio 3
function splitSentence(string1) {
  let string2 = string1.split(' ');
  return string2;
}
console.log(splitSentence('Go Trybe'));

// Desafio 4
function concatName(arrayDeStrings) {
  let firstWordlastWord = arrayDeStrings[arrayDeStrings.length - 1] + ', ' + arrayDeStrings[0]
  return firstWordlastWord;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// Desafio 5
function footballPoints(wins, ties) {
  let pontosCampeonato = (wins * 3) + (ties * 1);
  return pontosCampeonato;
}
console.log(footballPoints(10, 5))
// Desafio 6
function highestCount(arrayDeNumeros) {
  let maiorNumero = [];
  for (let index in arrayDeNumeros) {
  if (arrayDeNumeros[index] > maiorNumero) {
    maiorNumero = arrayDeNumeros[index]
  }
}
  let escolhaNumero = 0;
  for (let j in arrayDeNumeros) {
    if (arrayDeNumeros[j] === maiorNumero) {
    escolhaNumero += 1
  }
  }
  return escolhaNumero;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia = Math.abs(cat1 - mouse)
  let distancia1 = Math.abs(cat2 - mouse)
  if (distancia === distancia1) {
    return 'os gatos trombam e o rato foge';
  } else if (distancia > distancia1) {
    return 'cat2';
  } else {
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(arrayDeNumeros1) {
  let arrayDeNumeros2 = [];
  for (let i = 0; i < arrayDeNumeros1.length; i += 1) {
    if (arrayDeNumeros1[i] % 3 === 0 && arrayDeNumeros1[i] % 5 !== 0) {
      arrayDeNumeros2.push('fizz');
    } else if (arrayDeNumeros1[i] % 5 === 0 && arrayDeNumeros1[i] % 3 !== 0) {
      arrayDeNumeros2.push('buzz')
    } else if (arrayDeNumeros1[i] % 5 === 0 && arrayDeNumeros1[i] % 3 === 0) {
      arrayDeNumeros2.push('fizzBuzz')
    } else {
      arrayDeNumeros2.push('bug!')
    }
  }
  return arrayDeNumeros2
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
// Desafio 9
function encode(string1) {
  let mudaVogais = string1.replace(/a/g, '1');
  let mudaVogai = mudaVogais.replace(/e/g, '2');
  let mudaVoga = mudaVogai.replace(/i/g, '3');
  let mudaVog = mudaVoga.replace(/o/g, '4');
  let mudaVo = mudaVog.replace(/u/g, '5');
  return mudaVo;
}

function decode(string2) {
  let mudaVogais = string2.replace(/1/g, 'a');
  let mudaVogai = mudaVogais.replace(/2/g, 'e');
  let mudaVoga = mudaVogai.replace(/3/g, 'i');
  let mudaVog = mudaVoga.replace(/4/g, 'o');
  let mudaVo = mudaVog.replace(/5/g, 'u');
  return mudaVo;
}

// Desafio 10
function techList(tech, name) {
  let array1 = [];
  tech.sort();
  if (tech.length <= 0) {
    return 'Vazio!';
  }
  for (let index in tech) {
    array1.push({
      tech: tech[index],
      name: name,
    })
  }
  return array1
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

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
