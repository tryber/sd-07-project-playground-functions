// Desafio 1
function compareTrue(dormir, acordado) {
  if (dormir == true && acordado == true) {
    return true;
  } else {
    return false;
  };
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
let frase = 'go Trybe';

function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
let wordConcat = ['Raphael', 'Cicero', 'Rodrigues', 'Araujo'];

function concatName(wordConcat) {
  let firstWord = wordConcat[0];
  let lastWord = wordConcat[wordConcat.length - 1];
  return lastWord + ', ' + firstWord;
}

// Desafio 5
let wins = 10;
let ties = 3;

function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
let arrayNumeros = [9, 1, 2, 3, 9, 5, 7];

function highestCount(arrayNumeros) {
  let maiorNumero = Math.max(...arrayNumeros);
  let repeticoes = 0;
  for (let i = 0; i < arrayNumeros.length; i += 1) {
    if (arrayNumeros[i] === maiorNumero) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  distCat1 = Math.abs(mouse - cat1);
  distCat2 = Math.abs(mouse - cat2);

  if (distCat1 < distCat2) {
    return "cat1";
  } else if (distCat2 < distCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let numeros of array) {
    if ((numeros % 5 === 0) && numeros % 3 === 0) {
      newArray.push("fizzBuzz");
    } else if (numeros % 5 === 0) {
      newArray.push("buzz");
    } else if (numeros % 3 === 0) {
      newArray.push("fizz");
    } else {
      newArray.push("bug!");
    }
  }
  return newArray;
}

// Desafio 9
let string = "hi there!";
function encode(string) {
  let vazio = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] == 'a') {
      vazio += '1';
    } else if (string[i] == 'e') {
      vazio += '2';
    } else if (string[i] == 'i') {
      vazio += '3';
    } else if (string[i] == 'o') {
      vazio += '4';
    } else if (string[i] == 'u') {
      vazio += '5';
    } else {
      vazio += string[i];
    }
  }
  return vazio;
}

function decode(string) {
  let vazio = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] == '1') {
      vazio += 'a';
    } else if (string[i] == '2') {
      vazio += 'e';
    } else if (string[i] == '3') {
      vazio += 'i';
    } else if (string[i] == '4') {
      vazio += 'o';
    } else if (string[i] == '5') {
      vazio += 'u';
    } else {
      vazio += string[i];
    }
  }
  return vazio;
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
