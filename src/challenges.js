// Desafio 1 - Usando o operador && (and).
function compareTrue(a, b) {
  if (a && b) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2 - Área do triângulo.
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3 - Dividindo a frase.
function splitSentence(string) {
  let phrase = string.split(' ');
  return phrase;
}

// Desafio 4 - Concatenação de strings.
function concatName(arr) {
  let arrString = arr.join(', ').split(', ');
  return arrString[arrString.length - 1] + ', ' + arrString[0];
}

// Desafio 5 - Pontos no Futebol
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties;
  return winPoints + tiePoints;
}


// Desafio 6
function highestCount() {

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = cat1 - mouse;
  let distCat2 = cat2 - mouse;

  if (distCat1 > distCat2) {
    return 'cat2';
  } else if (distCat1 < distCat2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(array) {
  let fizz = "fizz";
  let buzz = "buzz";
  let fizzBuzz = "fizzBuzz";
  let bug = "bug!";
  let resultArray = [];
  
  for (let i in array) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      resultArray.push(fizzBuzz);
    } else if (array[i] % 3 == 0) {
      resultArray.push(fizz);
    } else if (array[i] % 5 == 0) {
      resultArray.push(buzz);
    } else {
      resultArray.push(bug);
    }
  }

  return resultArray;
}

// Desafio 9
function encode(string) {
  let newString = string.split('');
  for (let i in newString) {
    
    switch(newString[i]) {
      case 'a':
        newString[i] = '1';
        break;
      case 'e':
        newString[i] = '2';
        break;
      case 'i':
        newString[i] = '3';
        break;
      case 'o':
        newString[i] = '4';
        break;
      case 'u':
        newString[i] = '5';
        break;
    }
  }

  return newString.join('');
}

function decode(string) {
  let newString = string.split('');
  
  for (let i in newString) {

    switch(newString[i]) {
      case '1':
        newString[i] = 'a';
        break;
      case '2':
        newString[i] = 'b';
        break;
      case '3':
        newString[i] = 'c';
        break;
      case '4':
        newString[i] = 'd';
        break;
      case '5':
        newString[i] = 'e';
        break;
    }
  }

  return newString.join('');
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
