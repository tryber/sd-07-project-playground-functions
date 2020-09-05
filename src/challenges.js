// Desafio 1
function compareTrue() {
  // seu código aqui
}

// Desafio 2
function calcArea() {
  // seu código aqui
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

function wordReplacer(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  }

  if (number % 3 === 0) {
    return 'fizz';
  }

  if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

// Desafio 8
function fizzBuzz(numbers) {
  let words = [];

  for (let i in numbers) {
    if (i) {
      words.push(wordReplacer(numbers[i]));
    }
  }

  return words;
}

fizzBuzz([1, 2, 3, 4, 5, 6]);

function encodeChar(char) {
  switch (char) {
    case 'a':
      return '1';
    case 'e':
      return '2';
    case 'i':
      return '3';
    case 'o':
      return '4';
    case 'u':
      return '5';
    default:
      return char;
  }
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let encoded = [];

  for (const index in string) {
    if (string[index]) {
      encoded.push(encodeChar(string[index]));
    }
  }

  return encoded.join('');
}

function decodeChar(char) {
  switch (char) {
    case '1':
      return 'a';
    case '2':
      return 'e';
    case '3':
      return 'i';
    case '4':
      return 'o';
    case '5':
      return 'u';
    default:
      return char;
  }
}

function decode(string) {
  // seu código aqui
  let decoded = [];

  for (const index in string) {
    if (string[index]) {
      decoded.push(decodeChar(string[index]));
    }
  }

  return decoded.join('');
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
