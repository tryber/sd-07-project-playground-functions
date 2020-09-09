// Começando...
// Desafio 1
compareTrue(true, false);

function compareTrue(firstValue, secondValue) {
  console.log("Desafio 1:");
  if (firstValue === true && secondValue === true) {
    console.log("As duas variáveis são verdadeiras!!!");
    return true;
  } else if (firstValue === false || secondValue === false) {
    let compare = false;
    console.log("Pelo menos uma das variáveis não é verdadeira!!!");
    return false;
  } else {
    console.log("Erro!!! Pelo menos uma das variáveis não são booleanas");
  }
}

// Desafio 2
calcArea(2, 3);

function calcArea(base, height) {
  console.log("");
  console.log("Desafio 2:");
  let calc = base * height / 2;
  console.log("A área do triângulo é " + calc);
  return calc;
}

// Desafio 3
splitSentence("Go Trybe")

function splitSentence(inputString) {
  console.log("");
  console.log("Desafio 3:");
  let arrayOfStrings = inputString.split([' ']);

  console.log("A string original é: " + inputString);
  console.log("Array: " + arrayOfStrings);
  return arrayOfStrings;
}

// Desafio 4
concatName(['Lucas','Cassiano','Ferraz','Paolillo']);

function concatName(names) {
  console.log("");
  console.log("Desafio 4:");

  let firstName = names[0];
  let lastName = names[names.length -1];

  let resultName = lastName + ", " + firstName;
  console.log(resultName);
  return resultName;
}

// Desafio 5
footballPoints(10, 1);

function footballPoints(wins, ties) {
  console.log("");
  console.log("Desafio 5:");

  let points = 0;
  for ( i = 0; i < wins; i += 1 ) {
    points += 3;
  }
  for ( j = 0; j < ties; j += 1 ) {
    points += 1;
  }

  console.log("O time possui " + points + " pontos");
  return points;
}

// Desafio 6
highestCount([9, 1, 2, 3, 9, 5, 7]);

function highestCount(arrayOfNumbers) {
  console.log("");
  console.log("Desafio 6:");

  let highestNumber = 0;
  //-------Definindo o maior número-------//
  for ( i = 0; i < arrayOfNumbers.length - 1; i += 1 ) {
    firstNum = arrayOfNumbers[i];

    for ( j = 1; j < arrayOfNumbers.length; j += 1 ) {
      secondNum = arrayOfNumbers[j];
  
      if (highestNumber < firstNum && highestNumber < secondNum ) {
        if ( firstNum > secondNum ) {
          //---Se o primeiro número for maior---//
          highestNumber = firstNum;
        } else {
          //---Se o segundo número for maior---//
          highestNumber = secondNum;
        }
      }
    }
  }

  //-------Encontrando o maior número-------//
  let count = 0;

  for ( countIndex = 0; countIndex < arrayOfNumbers.length; countIndex += 1 ) {
    if ( arrayOfNumbers[countIndex] === highestNumber ) {
      count += 1;
    }
  }

  console.log("O maior número, " + highestNumber + ", se repetiu " + count + " vezes");
  return count;
}

// Desafio 7
catAndMouse(1, 3, 2)

function catAndMouse(mouse, cat1, cat2) {
  console.log("");
  console.log("Desafio 7:");

  //-------Distância entre o rato e os gatos-------//
  distanceCat1 = Math.abs(cat1 - mouse);
  distanceCat2 = Math.abs(cat2 - mouse);

  if ( distanceCat1 == distanceCat2 ) {
    console.log("Os gatos trombam e o rato foge");
    return 'os gatos trombam e o rato foge';
  } else {

    if ( distanceCat1 < distanceCat2 ) {
      console.log("O gato 1 chegou primeiro no rato");
      return 'cat1';

    } else {
      console.log("O gato 2 chegou primeiro no rato");
      return 'cat2';
    }
  }
}

// Desafio 8
fizzBuzz([2, 15, 7, 9, 45]);

function fizzBuzz(arrayOfNumbers2) {
  console.log("");
  console.log("Desafio 8:");

  resultArray = [];

  for ( i = 0; i < arrayOfNumbers2.length; i += 1 ){
    
    if (( arrayOfNumbers2[i] % 5 ) === 0 && ( arrayOfNumbers2[i] % 3 ) === 0 ) {
      resultArray.push("fizzBuzz");
    
    } else {
      if (( arrayOfNumbers2[i] % 3 ) === 0 ) {
        resultArray.push("fizz");
  
      } else if (( arrayOfNumbers2[i] % 5 ) === 0 ) {
        resultArray.push("buzz");
      
      } else if (( arrayOfNumbers2[i] % 5 || arrayOfNumbers2[i] % 3 ) != 0 ) {
        resultArray.push("bug!");
      }
    } 
  }

  console.log(resultArray);
  return resultArray;
}

// Desafio 9
encode("hi there!");

function encode(inputString) {
  console.log("");
  console.log("Desafio 9 (Encode):");
  let encodedText = "";

  for ( i = 0; i < inputString.length; i += 1 ) {
    if ( inputString[i] === "a" ) {
      encodedText += "1";

    } else if (inputString[i] === "e" ) {
      encodedText += "2";

    } else if ( inputString[i] === "i" ) {
      encodedText += "3";

    } else if (inputString[i] === "o" ) {
      encodedText += "4";
      
    } else if (inputString[i] === "u" ) {
      encodedText += "5";
      
    } else {
      encodedText += inputString[i];
    }
  }

  console.log(encodedText);
  return encodedText;
}

decode("h3 th2r2!");

function decode(inputString) {
  console.log("");
  console.log("Desafio 9 (Decode):");
  let decodedText = "";

  for ( i = 0; i < inputString.length; i += 1 ) {
    if ( inputString[i] === "1" ) {
      decodedText += "a";

    } else if (inputString[i] === "2" ) {
      decodedText += "e";

    } else if ( inputString[i] === "3" ) {
      decodedText += "i";

    } else if (inputString[i] === "4" ) {
      decodedText += "o";
      
    } else if (inputString[i] === "5" ) {
      decodedText += "u";
      
    } else {
      decodedText += inputString[i];
    }
  }

  console.log(decodedText);
  return decodedText;
}

// Desafio 10
techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas");

function techList(namesArr, name) {
  console.log("");
  console.log("Desafio 10:");

  if ( namesArr.length != 0 && Array.isArray(namesArr) ) {
    let list = {};

    for ( let i in namesArr ) {
      list[i] = { tech: namesArr[i], name: name };
    };

    //-------Ordenando arrays-------//
    let orderedList = Object.values(list).sort(compare);
    console.log(orderedList);
    return orderedList;
  
  } else {

    console.log("Vazio!");
    return 'Vazio!';
  }
}

function compare(a, b) {
  if ( a.tech > b.tech ) {
    return 1;
  } else if ( a.tech < b.tech ) {
    return -1;
  } else {
    return 0;
  }
}

// Desafio 11
generatePhoneNumber([1, 2, 2, 4, 5, 5, 2, 8, 9, 0, 1]);

function generatePhoneNumber(arrayNumbers) {
  console.log("");
  console.log("Desafio 11:");
  let firstFilter = true;
  let secondFilter = true;
  let thirdFilter = true;

  //-------Verificando se tem 11 dígitos--------------------------------//
  if ( arrayNumbers.length !== 11 ) {
    firstFilter = false;
    console.log("Array com tamanho incorreto.");
    return "Array com tamanho incorreto.";
  }

  //-------Verificando se tem dígitos maiores que 9 ou menores que 0-------//
  for ( i = 0; i < arrayNumbers.length; i += 1 ) {
    if ( arrayNumbers[i] > 9 || arrayNumbers[i] < 0 ) {
      secondFilter = false;
      console.log("Não é possível gerar um número de telefone com esses valores.");
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  //-------Verificando se algum dígito se repete + de 3 vezes---------//
  let count = 0;
  for (let j = 0; j < arrayNumbers.length; j += 1) {
    count = 0;
    for (let k = 0; k < arrayNumbers.length; k += 1) {
      if (arrayNumbers[j] === arrayNumbers[k]) {
        count += 1;
      }
    }
    if (count >= 3) {
      console.log("Não é possível gerar um número de telefone com esses valores.");
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  //-------Retornando número de telefone--------------//
    if ( firstFilter === true && secondFilter === true && thirdFilter === true ) {
      arrayNumbers.splice(0, 0, '(');
      arrayNumbers.splice(3, 0, ')');
      arrayNumbers.splice(4, 0, ' ');
      arrayNumbers.splice(10, 0, '-');
      console.log(arrayNumbers.join(''));
      return arrayNumbers.join('');
    }
}


// Desafio 12
triangleCheck(10, 13, 2);

function triangleCheck(lineA, lineB, lineC) {
  console.log("");
  console.log("Desafio 12:");
  let condition = 0;

  //            Condição: | b - c | < a < b + c   //
  //                      | a - c | < b < a + c   //
  //                      | a - b | < c < a + b   //

  let firstOperation = [];

  firstOperation.push(subLines(lineB, lineC));
  firstOperation.push(subLines(lineA, lineC));
  firstOperation.push(subLines(lineA, lineB));

  let secondOperation = [];

  secondOperation.push(sumLines(lineB, lineC));
  secondOperation.push(sumLines(lineA, lineC));
  secondOperation.push(sumLines(lineA, lineB));


  if ( firstOperation[0] < lineA && lineA < secondOperation[0] ) {
    console.log("É um triângulo");
    return true;
    
  } else {
    
    if ( firstOperation[1] < lineB && lineB < secondOperation[1] ) {
      console.log("É um triângulo");
      return true;
    
    } else {

      if ( firstOperation[2] < lineC && lineC < secondOperation[2] ) {
        console.log("É um triângulo");
        return true;
      
      } else {
        console.log("Não é um triângulo");
        return false;
      }
    }

  }

  

}

function sumLines(first, second) {
  return Math.abs(first + second);
}

function subLines(first, second) {
  return Math.abs(first - second);
}

// Desafio 13
hydrate("1 cachaça, 5 cervejas e 1 copo de vinho");

function hydrate (inputString) {
  console.log("");
  console.log("Desafio 13:");

  let drinks = (inputString.replace(/\D/g, ""));
  drinks = parseInt(drinks);

  let sum = Array.from(drinks.toString()).map(Number);

  let result = 0;
  for ( i = 0; i < sum.length; i += 1 ) {
    result += sum[i];
  }

  if ( result > 1 ) {
    console.log(result + " copos de água");
    return result + " copos de água";
  } else {
    console.log(result + " copo de água");
    return result + " copo de água";
  }
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
