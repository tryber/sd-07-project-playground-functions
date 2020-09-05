// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  }
};

// Desafio 2
function calcArea(base, height) {
  area = (base * height) / 2;
  return area;
};

// Desafio 3
function splitSentence(string) {
  let arrayOfStrings = string.split(" ");
  return arrayOfStrings;
};

// Desafio 4
array = ["primeiro", "segundo", "terceiro"]
function concatName(array) {
  let string = array.pop() + ", " + array.shift();
  return string;
};

// Desafio 5
function footballPoints(wins, ties) {
  points = (wins * 3) + ties;
  return points;
};

// Desafio 6
array = [3,4,5,5,5];
function highestCount(array) {
  count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === Math.max.apply(Math, array)) {
      count += 1;
    }
  }
  return count;
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = Math.abs(mouse - cat1);
  let cat2Position = Math.abs(mouse - cat2);
  if (cat1Position > cat2Position) {
    return "cat2";
  } else if (cat1Position < cat2Position) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge"
  }
};

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  arrayDeStrings = [];
  for (let i = 0; i < arrayDeNumeros.length; i++){
    if ( arrayDeNumeros[i] % 3 === 0 && arrayDeNumeros[i] % 5 !== 0) {
      arrayDeStrings.push("fizz");
    } else if (arrayDeNumeros[i] % 3 !== 0 && arrayDeNumeros[i] % 5 === 0) {
      arrayDeStrings.push("buzz");
    } else if (arrayDeNumeros[i] % 3 === 0 && arrayDeNumeros[i] % 5 === 0) {
      arrayDeStrings.push("fizzBuzz");
    } else {
      arrayDeStrings.push("bug!")
    }
  }
  return arrayDeStrings;
};

// Desafio 9
function encode(string) {
  let replaceA = string.replace(/a/g, "1"); 
  let replaceE = replaceA.replace(/e/g, "2"); 
  let replaceI = replaceE.replace(/i/g, "3"); 
  let replaceO = replaceI.replace(/o/g, "4"); 
  let replaceU = replaceO.replace(/u/g, "5");
  return replaceU; 
};

function decode(replaceU) {
  let placeA =  replaceU.replace(/1/g, "a");
  let placeE = placeA.replace(/2/g, "e");
  let placeI = placeE.replace(/3/g, "i");
  let placeO = placeI.replace(/4/g, "o");
  let placeU = placeO.replace(/5/g, "u");
  return placeU;
}

// Desafio 10
function techList(array, name) {
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
