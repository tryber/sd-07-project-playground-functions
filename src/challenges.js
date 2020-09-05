// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let stringPhrase = phrase;
  return stringPhrase.split(" ");
}

// Desafio 4
function concatName(array) {
  let parArray = array;
  let arrayFirst = parArray[0];
  let arrayLast = parArray[parArray.length - 1];
  return (concatName = `${arrayLast}, ${arrayFirst}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3 + ties;
  return (footballPoints = winsPoints);
}

// Desafio 6
function highestCount(array) {
  let numberHigth = array[0];
  let somNumber = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > numberHigth) {
      numberHigth = array[i];
    }
  }
  for (let j = 0; j < array.length; j += 1) {
    if (numberHigth == array[j]) {
      somNumber += 1;
    }
  }
  return somNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  distanceCat1 = Math.abs(mouse - cat1);
  distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 < distanceCat2) {
    return "cat1";
  } else if (distanceCat2 < distanceCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i += 1)
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      newArray.push("fizzBuzz");
    } else if (array[i] % 3 === 0) {
      newArray.push("fizz");
    } else if (array[i] % 5 === 0) {
      newArray.push("buzz");
    } else {
      newArray.push("bug!");
    }
  return newArray;
}

// Desafio 9
function encode(str) {
  str = str.replace(/a/gi, "1")
  str = str.replace(/e/gi, "2")
  str = str.replace(/i/gi, "3")
  str = str.replace(/o/gi, "4")
  str = str.replace(/u/gi, "5")
  return str;
}

function decode(str) {
  str = str.replace(/1/gi, "a")
  str = str.replace(/2/gi, "e")
  str = str.replace(/3/gi, "i")
  str = str.replace(/4/gi, "o")
  str = str.replace(/5/gi, "u")
  return str;
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
};
