// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2){
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
function splitSentence(string) {
  let arrayString = string.split(' ')
  return arrayString;
}

// Desafio 4
function concatName(array) {
  let arrayReverse = array.reverse();
  let arrayLastFirst = [arrayReverse[0], arrayReverse[array.length-1]];
  return arrayLastFirst.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties;
  let totalPoints = winPoints + tiePoints;
  return totalPoints;
}

// Desafio 6
function highestCount(array) {
  let arrayReverse = array.sort().reverse()
  let highestNumber = 0;
  let repetitionCount = 0;
  for (let index of arrayReverse){
    if (highestNumber < arrayReverse[index]){
      highestNumber = arrayReverse[index];
    }
  }
  for (let index2 of arrayReverse){
    if (index2 === highestNumber){
      repetitionCount += 1;
    }
  }
  return (repetitionCount);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = cat1 - mouse; 
  let distanceCat2 = cat2 - mouse; 
  if (distanceCat1 < 0) {distanceCat1 = distanceCat1 * -1}
  if (distanceCat2 < 0) {distanceCat2 = distanceCat2 * -1}
  if (distanceCat1 < distanceCat2){
    return "cat1";
  } else if (distanceCat2 < distanceCat1) {
    return "cat2";
  } else  if (distanceCat2 === distanceCat1){
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let index;
  let arrayFizzBuzz = [];
  for (index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 !== 0){
      arrayFizzBuzz.push("fizz");
    } else if (array[index] % 3 !== 0 && array[index] % 5 === 0){
      arrayFizzBuzz.push("buzz");
    } else if (array[index]% 3 === 0 && array[index] % 5 === 0){
      arrayFizzBuzz.push("fizzBuzz");
    } else {
      arrayFizzBuzz.push("bug!");
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(string) {
  let frase = '';
  for (let index in string){
    switch (string[index]){
        case 'a':
          frase += '1';
          break;
        case 'e':
          frase += '2';
          break;
        case 'i':
          frase += '3';
          break; 
        case 'o':
          frase += '4';
          break;
        case 'u':
          frase += '5';
          break;
        default :
        frase += string[index];
    }
  }
  return frase;
}
function decode(string) {
  let frase = '';
  for (let index in string){
    switch (string[index]){
        case '1':
          frase += 'a';
          break;
        case '2':
          frase += 'e';
          break;
        case '3':
          frase += 'i';
          break; 
        case '4':
          frase += 'o';
          break;
        case '5':
          frase += 'u';
          break;
        default:
          frase += string[index];
    }
  }
  return frase;
}

// Desafio 10
function techList(array, names) {
  let object = {
    tech : '', 
    name : names,
  }
  if (array.length !== 0){
    array.sort()
  for (let index in array){
    let object = {};
    object.tech = array[index];
    object.name = names;
    array[index] = object;
  }
  return array;
} else {
  return 'Vazio!';
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
