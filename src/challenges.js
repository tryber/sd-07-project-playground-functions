// Desafio 1
function compareTrue(boolean1, boolean2) {
  return boolean1 == true && boolean2 == true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(arrayDeStrings) {
  return arrayDeStrings[arrayDeStrings.length-1] + ', ' + arrayDeStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let maiorValor = 0;

    for (let i in numbers) {
        if (numbers[i] > maiorValor) {
        maiorValor = numbers[i]
        }
    }
    let counts = 0;
    
    for (let i in numbers) {
        if (numbers[i] == maiorValor) {
            counts += 1;
        }
    }

  return counts;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 == cat2) {
    console.log("os gatos trombam e o rato foge");
  }
  else if ((cat1 - mouse) < (cat2 - mouse)) {
    console.log('cat1');
  }
  else {
    console.log('cat2');
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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