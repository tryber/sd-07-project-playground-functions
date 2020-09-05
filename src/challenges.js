// Desafio 1
function compareTrue(B1, B2) {
  if (B1 && B2) {
    return true;
  } else {
    return false;
  }
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
  // seu código aqui
}

// Desafio 3
function splitSentence(sentence) {
  let word = "";
  let array = [];
  for (let i = 0 ; i <= sentence.length; i += 1) {
    if (sentence[i] === " " || i == sentence.length) {
      array.push(word);
      word = "";
    } else {
      word += sentence[i];
    }
  }
  return array;
  // seu código aqui
}

// Desafio 4
function concatName(arrays) {
  return `${arrays[arrays.length - 1]} , ${arrays[0]}`;
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
  // seu código aqui
}

// Desafio 6
function highestCount(numbers) {
  numbers.sort();
  let maior = 1;
  for (let i = numbers.length - 1; i != numbers.length; i -= 1) {
    if (numbers[i - 1] === numbers[i]) {
      maior += 1;
    } else {
      break;
    }
  }
  return maior;
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return "cat1";
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
  // seu código aqui
}

// Desafio 8
function fizzBuzz(arraynum) {
  let fizzBuzzBug = [];
  for (i in arraynum) {
    if (arraynum[i] % 3 === 0 && arraynum[i] % 2 != 0 && arraynum[i] % 5 != 0) {
      fizzBuzzBug.push("fizz");
    } else if (
      arraynum[i] % 3 != 0 &&
      arraynum[i] % 2 != 0 &&
      arraynum[i] % 5 === 0
    ) {
      fizzBuzzBug.push("buzz");
    } else if (arraynum[i] % 3 === 0 && arraynum[i] % 5 === 0) {
      fizzBuzzBug.push("fizzBuzz");
    } else {
      fizzBuzzBug.push("bug!");
    }
  }
  return fizzBuzzBug;
  // seu código aqui
}

// Desafio 9
function encode(vogaismin) {
  vogaismin = vogaismin
    .replace(/a/g, "1")
    .replace(/e/g, "2")
    .replace(/i/g, "3")
    .replace(/o/g, "4")
    .replace(/u/g, "5");
  return vogaismin;
  // seu código aqui
}
function decode(vogaisnum) {
  vogaisnum = vogaisnum
    .replace(/1/g, "a")
    .replace(/2/g, "e")
    .replace(/3/g, "i")
    .replace(/4/g, "o")
    .replace(/5/g, "u");
  return vogaisnum;
  // seu código aqui
}

// Desafio 10
function techList(tech, name) {
  name = new Object(name);
  for (i in tech.length) {
    name = { tech: `$tech[i]` };
  }
  return name.tech;
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

