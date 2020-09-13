// PROJECT PLAYGROUND FUNCTIONS
// Desafio 1
function compareTrue(p1, p2) {
  if  (p1 && p2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base*height)/2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  let string = array[(array.length-1)] + ', ' + array[0];
  return string;
}

// Desafio 5
function footballPoints(wins, ties) { 
  let pontosCorridos = (wins*3) + ties
  return pontosCorridos;
}

// Desafio 6
function highestCount(numbers) {
  max = numbers[0];
  countMax = 0;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  for (j = 0; j < numbers.length; j++) {
    if (numbers[j] === max) {
      countMax += 1;
    }
  }
  return countMax;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = 0;
  let dist2 = 0;
  if (cat1 < mouse) {
    dist1 = mouse - cat1;
  } else {
    dist1 = cat1 - mouse;
  }
  if (cat2 < mouse) {
    dist2 = mouse - cat2;
  } else {
    dist2 = cat2 - mouse;
  }
  if (dist1 = dist2) {
    return "os gatos trombam e o rato foge";
  } else if (dist1 > dist2) {
    return cat2;
  } else {
    return cat1;
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrayFB = [];
  for (let i = 0; i < array.length; i++) {
    let div3 = array[i]%3 
    let div5 = array[i]%5 
    if (div3 == 0) {
      arrayFB.push("Fizz");
    } if else (div5 == 0) {
      arrayFB.push("Buzz");
    } if else (div3 == 0 && div5 == 0) {
      arrayFB.push("FizzBuzz");
    } if else (div3 != 0 && div5 != 0) {
      arrayFB.push("bug!");
    } 
  }
  return arrayFB;
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
