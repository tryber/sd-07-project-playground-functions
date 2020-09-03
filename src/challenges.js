// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return (true);
  }
  return (false);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height / 2);
}

// Desafio 3
function splitSentence(sentence) {
  let array = [];
  let word = "";
  for (let letter of sentence) {
    if (letter === " ") {
      array.push(word);
      word = "";
    }
    else{
      word += letter;
    }
  }
  array.push(word);
  return (array);
}

// Desafio 4
function concatName(array) {
  return (`${array[array.length - 1]}, ${array[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(array) {
  let maxValue = array[0];
  for (let value of array) {
    if (value > maxValue) {
      maxValue = value;
    }
  }
  let count = 0
  for (let value of array) {
    if (value ==maxValue) {
      count += 1;
    }
  }
  return (count);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  let sentense = null;
  if (distanceCat1 < distanceCat2) {
    sentense = "cat1";
  }
  else if (distanceCat2 < distanceCat1) {
    sentense = "cat2";
  }
  else{
    sentense = "os gatos trombam e o rato foge";
  }
  return (sentense);
}

// Desafio 8
function fizzBuzz(array) {
  let word = null;
  let arrayWords = [];
  for (let value of array) {
    if ((value % 3 == 0) && (value % 5 != 0)) {
      word = "fizz";
    }
    else if ((value % 5 == 0) && (value % 3 != 0)) {
      word = "buzz";
    }
    else if ((value % 3 == 0) && (value % 5 == 0)) {
      word = "fizzBuzz";
    }
    else{
      word = "bug!";
    }
    arrayWords.push(word);
  }
  return (arrayWords);
}

// Desafio 9
function encode(string) {
  let change = "";
  for (let index in string) {
    switch (string[index]) {
      case "a":
        change += "1";
        break;
      case "e":
        change += "2";
        break;
      case "i":
        change += "3";
        break;
      case "o":
        change += "4";
        break;
      case "u":
        change += "5";
        break;
      default:
        change += string[index];
    }
  }
  return (change);
}
function decode(string) {
  let change = "";
  for (let index in string) {
    switch (string[index]) {
      case "1":
        change += "a";
        break;
      case "2":
        change += "e";
        break;
      case "3":
        change += "i";
        break;
      case "4":
        change += "o";
        break;
      case "5":
        change += "u";
        break;
      default:
        change += string[index];
    }
  }
  return (change);
}

// Desafio 10
function techList(array, name) {
  let arrayStructure = [];
  let structure = {
    tech: "",
    name: name,
  }

  //if (array != undefined) {
  if (array.length != 0) {
    array.sort();
    for (let word of array) {
      structure.tech = word;
      arrayStructure.push(Object.assign({}, structure));
    }
    return  (arrayStructure);
  }
  return ("Vazio!");
}

// Desafio 11
function generatePhoneNumber(array) {
  let str = "";
  if (array.length != 11) {
    str = "Array com tamanho incorreto.";
  }
  else if ((!testUnity(array)) || testRepeat(array)) {
    str = "não é possível gerar um número de telefone com esses valores";
  }
  else {
    str = "(";
    for (let value of array) {
      if (str.length == 3) {
        str += ") ";
      }
      if (str.length == 10) {
        str += "-";
      }
      str += value;
    }
  }
  return (str);
}

function testRepeat(array) {
  let cont = 0;
  let flag = false
  for (let valueCheck of array) {
    for (let value of array) {
      if (value == valueCheck) {
        cont += 1;
      }
    }
    if (cont > 2) {
      flag = true;
    }
    cont = 0
  }
  return (flag);
}

function testUnity(array) {
  for (let value of array) {
    if ((value < 0) || (value > 9)) {
      return (false);
    }
  }
  return (true);
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < (lineB + lineC)) && (lineB < (lineA + lineC)) && (lineC < (lineB + lineA))) {
    return (true);
  }
  return (false);
}

// Desafio 13
function hydrate(string) {
  let numbers = string.replace(/\D/g, '');
  let sum = 0;
  for (let value of numbers) {
    sum += parseInt(value);
  }
  if (sum == 1) {
    return (`${sum} copo de água`);
  }
  return (`${sum} copos de água`);
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
