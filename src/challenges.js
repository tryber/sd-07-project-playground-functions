// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}
// Desafio 4
function concatName(arrayOfString) {
  let lastAndFirstName = arrayOfString[arrayOfString.length - 1] + ', ' + arrayOfString[0];
  return lastAndFirstName;
}
// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = (wins * 3);
  let tiesPoints = ties;
  let totalPoints = (winsPoints + tiesPoints);
  return totalPoints;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let numbers = arrayNumbers.sort();
  let timesHits = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[numbers.length - 1] === numbers[i]) {
      timesHits += 1;
    }
  }
  return timesHits;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }
  else if (distanceCat2 === distanceCat1) {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  let arrayFizzBuzzBug = [];
  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    if (arrayOfNumbers[i] % 3 === 0 && arrayOfNumbers[i] % 5 !== 0) {
      arrayFizzBuzzBug.push('fizz');
    }
    else if (arrayOfNumbers[i] % 5 === 0 && arrayOfNumbers[i] % 3 !== 0) {
      arrayFizzBuzzBug.push('buzz');
    }
    else if (arrayOfNumbers[i] % 5 === 0 && arrayOfNumbers[i] % 3 === 0) {
      arrayFizzBuzzBug.push('fizzBuzz');
    }
    else {
      arrayFizzBuzzBug.push('bug!');
    }
  }
  return arrayFizzBuzzBug;
}
// Desafio 9
function encode(anyString) {
  let string = anyString.replace(/a/g,'1');
  string = string.replace(/e/g,'2');
  string = string.replace(/i/g,'3');
  string = string.replace(/o/g,'4');
  string = string.replace(/u/g,'5');
  return string;
}

function decode(anyString) {
  let string = anyString.replace(/1/g,'a');
  string = string.replace(/2/g,'e');
  string = string.replace(/3/g,'i');
  string = string.replace(/4/g,'o');
  string = string.replace(/5/g,'u');
  return string;
}
// Desafio 10
function techList(anyArray,name) {
  if(anyArray.length == 0) {
  return "Vazio!";
  }
  else {
    let array = anyArray.sort();
    let toLearn = [];
    for(let indice in array) {
      toLearn.push ({ tech: array[indice], name: name });
      }
    return toLearn;
  }
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