// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(15,5));


// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}
console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ", " + array[0];
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
console.log(footballPoints(2,3));

// Desafio 6
function highestCount(numeros) {
  let higherNumber = 0;
  let numberOfTimes = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (higherNumber <= numeros[i]) {
      higherNumber = numeros[i];
    }
  }
  for (let j = 0; j < numeros.length; j += 1) {
    if (higherNumber === numeros[j]) {
      numberOfTimes += 1;
    }
  }
  return numberOfTimes;
}
console.log(highestCount([9, 4, 4, 4, 9, 2, 1]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return "cat1";
  } else if ( distanceCat1 > distanceCat2) {
    return "cat2";
  } else {
    return ("os gatos trombam e o rato foge")
  }
}
console.log(catAndMouse(22, 10, 7));

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      result.push("fizzBuzz");
    } else if (array[i] % 3 === 0) {
      result.push("fizz");
    } else if (array[i] % 5 === 0) {
      result.push("buzz");
    } else {
      result.push("bug!");
    }
  }
  return result;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode(string) {
  let encoding = "";
  for (let i in string) {
    switch (string[i]) {
      case "a":
      encoding += "1";
      break;

      case "e":
      encoding += "2";
      break;

      case "i":
      encoding += "3";
      break

      case "o":
      encoding += "4";
      break;

      case "u":
      encoding += "5";
      break;

      default:
      encoding += string[i];
      break;
    }
  }
  return encoding;
}
console.log(encode("Hi there!"));

function decode(string) {
  let decoding = "";
  for (let i in string) {
    switch (string[i]) {
      case "1":
      decoding += "a";
      break;

      case "2":
      decoding += "e";
      break;

      case "3":
      decoding += "i";
      break;

      case "4":
      decoding += "o";
      break;

      case "5":
      decoding += "u";
      break;

      default:
      decoding += string[i];
      break;
    }
  }
  return decoding;
}
console.log(decode("h3 th2r2!"));

// Desafio 10
function techList(tech, name) {
  let result = [];
  tech.sort();
  if (tech.length === 0) {
    result = "Vazio!"
  } else {
    for (let i in tech) {
      result.push({ 
        tech: tech[i],
        name: name,
      })
    }
  }
  return result;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))

// Desafio 11 - falta testar repetidos
function generatePhoneNumber(array) {
  if (array.length != 11) {
    return "Array com tamanho incorreto.";
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  for (let i = 0; i < array.length; i += 1) {
  let numberOfTimes = 0;
  let teste = array[i];
    for (let j = 0; j < array.length; j += 1) { 
      if (teste === array[j]) {
          numberOfTimes += 1;
      }
    }
    if (numberOfTimes >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
      return "(" + array[0] + array[1] + ") "  + array[2]  + array[3] + array[4]  + array[5]  + array[6]  + "-" + array[7] + array[8] + array[9] + array[10];
}
console.log(generatePhoneNumber([1, 2, 3, -2, 5, 6, 3, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumAB = lineA + lineB;
  let difAB = Math.abs(lineA - lineB);
  let sumAC = lineA + lineC;
  let difAC = Math.abs(lineA - lineC);
  let sumBC = lineB + lineC;
  let difBC = Math.abs(lineB - lineC);
  if (lineA < sumBC && lineA > difBC) {
    return true;
  } else if (lineB < sumAC && lineB > difAC){
    return true;
  } else if (lineC < sumAB && lineC > difAB) {
    return true;
  } else {
    return false;
  }
}
console.log(triangleCheck(10, 14, 8));


// Desafio 13
function hydrate(string) {
  let numbers = string.match(/\d+/g).map(Number);
  let sum = 0;
  let answer = "";
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }
  if (sum < 2 && sum != 0) {
    answer = "1 copo de água";
  } else {
    answer = sum + " copos de água";
  }
  return answer
}
console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"))

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
