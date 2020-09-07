// Desafio 1
function compareTrue(a, b) {
  if (a == true && b == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentense) {
  let splitted = sentense.split(" ");
  return splitted;
}

// Desafio 4
function concatName(arrayDeStrings) {
  let lastString = "";
  let firstString = "";
  let lastCommaFirst = "";

  firstString = arrayDeStrings[0];
  lastString = arrayDeStrings[arrayDeStrings.length - 1];

  lastCommaFirst = lastString + ", " + firstString;

  return lastCommaFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoint = 3;
  let tiePoins = 1;
  let totalPoints = wins * winPoint + ties * tiePoins;
  return totalPoints;
}

// Desafio 6
function highestCount(numbersArray) {
  let higherNumber = 0;
  let timesRepeated = 0;
  for (let i = 0; i <= numbersArray.length; i += 1) {
    if (numbersArray[i] > higherNumber) {
      higherNumber = numbersArray[i];
    }
  }
  for (key in numbersArray) {
    if (numbersArray[key] == higherNumber) {
      timesRepeated += 1;
    }
  }
  return timesRepeated;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((mouse - cat1) ** 2 < (mouse - cat2) ** 2) {
    return "cat1";
  } else if ((mouse - cat1) ** 2 > (mouse - cat2) ** 2) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let array = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 == 0 && numbers[i] % 5 != 0) {
      array.push("fizz");
    } else if (numbers[i] % 5 == 0 && numbers[i] % 3 != 0) {
      array.push("buzz");
    } else if (numbers[i] % 3 == 0 && numbers[i] % 5 == 0) {
      array.push("fizzBuzz");
    } else {
      array.push("bug!");
    }
  }
  return array;
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
};
