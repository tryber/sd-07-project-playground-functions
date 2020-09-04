// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  } else {
    return false;
  }
}

let valorBool1 = true;
let valorBool2 = false;

console.log(compareTrue(valorBool1, valorBool2));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

let base = 4;
let height = 4;

console.log(calcArea(base, height));

// Desafio 3
function splitSentence(stringValue) {
  let arrayString = [];
  return arrayString = stringValue.split(" ");
}

let sentence = "go Trybe";
console.log(splitSentence(sentence));

// Desafio 4
function concatName(arrayStrings) {

  let array = [] = arrayStrings;

  let firstName = array[0];
  let lastName = array[array.length - 1]
  return lastName + ', ' + firstName;

}

let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(array));

// Desafio 5
function footballPoints(wins, ties) {

  let tie = ties * 1;
  let win = wins * 3;
  let total = tie + win;

  return total;
}

console.log(footballPoints(3, 3));

// Desafio 6
function highestCount(arrayNumbers) {

  let higher = arrayNumbers[0];
  let counter = 0;

  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] > higher)
      higher = arrayNumbers[i];
  }

  for (let j = 0; j < arrayNumbers.length; j += 1) {
    if (higher == arrayNumbers[j]) {
      counter += 1;
    }
  }

  return counter;
}

let array2 = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(array2));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let difference1 = Math.abs(mouse - cat1);
  let difference2 = Math.abs(mouse - cat2);
  let answer = 0;

  if (difference1 > difference2) {
    answer = "cat2";
  } else if (difference1 < difference2) {
    answer = "cat1";
  } else {
    answer = "os gatos trombam e o rato foge"
  }

  return answer;

}

console.log(catAndMouse(5, 2, 3));

// Desafio 8
function fizzBuzz(array) {

  arrayString = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      arrayString.push("fizzBuzz");
    } else if (array[i] % 3 == 0) {
      arrayString.push("fizz");
    } else if (array[i] % 5 == 0) {
      arrayString.push("buzz");
    } else {
      arrayString.push("bug!");
    }
  }
  return arrayString;
}

let array3 = [2, 15, 7, 9, 45];
console.log(fizzBuzz(array3));

// Desafio 9
function encode(word) {

  let answer = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i] == "a") {
      answer += "1";
    } else if (word[i] == "e") {
      answer += "2";
    } else if (word[i] == "i") {
      answer += "3";
    } else if (word[i] == "o") {
      answer += "4";
    } else if (word[i] == "u") {
      answer += "5";
    } else {
      answer += word[i];
    }
  }
  return answer
}

console.log(encode("hi there!"))

function decode(word) {

  let answer = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i] == "1") {
      answer += "a";
    } else if (word[i] == "2") {
      answer += "e";
    } else if (word[i] == "3") {
      answer += "i";
    } else if (word[i] == "4") {
      answer += "o";
    } else if (word[i] == "5") {
      answer += "u";
    } else {
      answer += word[i];
    }
  }
  return answer
}

console.log(decode("h3 th2r2!"))

// Desafio 10
//Função Compare tirada da página StcakOverflow:
// https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
//Explicação: Criada um função com chamada "compare" que possui dois parâmetros. Dentro da estrutura condicional IF,
//será comparada a propriedade "tech" (com os respectivos valores contidos nos mesmos) com o próximo objeto. Se a propriedade do objeto A, chamada de tech, for menor ao próximo objeto que está sendo comparado, 
//então A é colocado na posição a frente de B, e assim por diante, será feito com os próximo objetos da lista. Acredito que isto aconteça por meio da recursividade. 

function compare(a, b) {
  if (a.tech < b.tech) {
    return -1;
  }
  if (a.tech > b.tech) {
    return 1;
  }
  return 0;
}

function techList(arrayTech, name) {

  let newList = [];

  for (let i in arrayTech) {

    newList.push({ tech: arrayTech[i], name: name })
  }

  if (newList.length == 0) {
    return "Vazio!"
  } else {
    return newList.sort(compare);
  }
}

let arrayTecnologies = ["CSS", "HTML", "JavaScript", "Jest", "React"];
let myName = "Lucas";

console.log(techList(arrayTecnologies, myName));

// Desafio 11
function generatePhoneNumber(array) {

  let stringTel = "";
  let counterRepeat = 0;

  if (array.length == 11) {

    for (let i = 0; i < array.length; i++) {
      if (i == 0) {
        stringTel += "(";
        stringTel += array[i];
      } else if (i == 1) {
        stringTel += array[i];
      } else if (i == 2) {
        stringTel += ")";
        stringTel += " ";
        stringTel += array[i];
      } else if (i >= 3 && i <= 6) {
        stringTel += array[i];
      } else if (i == 7) {
        stringTel += "-";
        stringTel += array[i];
      } else {
        stringTel += array[i];
      }
    }

  } else {
    return stringTel = "Array com tamanho incorreto."
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0 || array[i] > 9) {
      stringTel = "não é possível gerar um número de telefone com esses valores";
    }
  }

  for (let i = 0; i < array.length; i++) {
    counterRepeat = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        counterRepeat += 1;
        if (counterRepeat >= 3) {
          stringTel = "não é possível gerar um número de telefone com esses valores";
          break;
        }
      }
    }
  }

  return stringTel;

}

let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 1, 0, 1];
console.log(generatePhoneNumber(array4));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let answer = false;

  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)) {
    answer = true;
  }

  if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
    answer = true;
  }

  return answer;

}

console.log(triangleCheck(3, 5, 2));

// Desafio 13
function hydrate(string) {

  var numbers = string.match(/\d+/g).map(Number);
  var adder = 0;

  for (let i = 0; i < numbers.length; i++) {
    adder += numbers[i]
  }

  if (adder == 1) {

    return adder + " copo de água"

  } else {

    return adder + " copos de água"

  }

}

var stringhydrate = "1 cachaça";
console.log(hydrate(stringhydrate));


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
