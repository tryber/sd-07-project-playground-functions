// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  else {
    return false;
  }
}  

compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;

  return areaTriangulo;
}

calcArea (2, 4);

// Desafio 3
function splitSentence(string) {
  let stringArray = string.split(" ");

  return stringArray;
}

splitSentence("go trybe");

// Desafio 4
function concatName(array) {
  let soma = array[array.length-1]+", "+array[0];  

  return soma;
}

concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoint = wins * 3;
  let championshipPoint = winsPoint + ties;

  return championshipPoint;
}

footballPoints(3, 1);

// Desafio 6
function highestCount(arrayNumeros) {
  let maiorNumero = arrayNumeros[0];  

  for (let i = 1; i < arrayNumeros.length; i += 1){
    if (arrayNumeros[i] > maiorNumero){
      maiorNumero = arrayNumeros[i];
    }
  }

  let repeticao = 0;

  for(let j = 0; j < arrayNumeros.length; j += 1){
    if (arrayNumeros[j] === maiorNumero) {
      repeticao += 1;
    }
  }

  return repeticao;
}

highestCount([9, 1, 2, 3, 9, 5, 7]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;
  
  let unidadeCat1 = Math.abs(distanceCat1);
  let unidadeCat2 = Math.abs(distanceCat2)

  if (unidadeCat1 === unidadeCat2) {
    return "os gatos trombam e o rato foge";
  }
  else if (unidadeCat2 < unidadeCat1){
    return "cat2";
  }
  else {
    return "cat1";
  }
}

catAndMouse(10,4,22);

// Desafio 8
function fizzBuzz(arrayNumerosFB) {
  let arrayFizzBuzz = [];

  for (let i = 0; i < arrayNumerosFB.length; i += 1) {
    if (arrayNumerosFB[i]%3 === 0 && arrayNumerosFB[i]%5 === 0) {
      arrayFizzBuzz.push("fizzBuzz");
    }
    else if (arrayNumerosFB[i]%3 === 0) {
      arrayFizzBuzz.push("fizz");
    }
    else if (arrayNumerosFB[i]%5 === 0) {
      arrayFizzBuzz.push("buzz");
    }
    else {
      arrayFizzBuzz.push("bug!");
    }    
  }    

  return arrayFizzBuzz;
}

fizzBuzz([2, 15, 7, 9, 45]);

// Desafio 9
function encode(phrase) {

  let arrayPhrase = phrase.split('')

  for (let i = 0; i < arrayPhrase.length; i += 1) {
    if (arrayPhrase[i] === "a") {
      arrayPhrase[i] = 1;
    }
    else if (arrayPhrase[i] === "e") {
      arrayPhrase[i] = 2;
    }
    else if (arrayPhrase[i] === "i") {
      arrayPhrase[i] = 3;
    }
    else if (arrayPhrase[i] === "o") {
      arrayPhrase[i] = 4;
    }
    if (arrayPhrase[i] === "u") {
      arrayPhrase[i] = 5;
    }
  }

  return arrayPhrase.join("");
}

encode("hi there!");

function decode(phraseNumber) {
  let arrayPhraseNumber = phraseNumber.split('')

  for (let i = 0; i < arrayPhraseNumber.length; i += 1) {
    if (arrayPhraseNumber[i] == 1) {
      arrayPhraseNumber[i] = "a";
    }
    else if (arrayPhraseNumber[i] == 2) {
      arrayPhraseNumber[i] = "e";
    }
    else if (arrayPhraseNumber[i] == 3) {
      arrayPhraseNumber[i] = "i";
    }
    else if (arrayPhraseNumber[i] == 4) {
      arrayPhraseNumber[i] = "o";
    }
    if (arrayPhraseNumber[i] == 5) {
      arrayPhraseNumber[i] = "u";
    }
  }

  return arrayPhraseNumber.join("");
}

decode("h3 th2r2!");

// Desafio 10
function techList(tecnologias, name) {
  let tecnologiasCrescente = tecnologias.sort()
  let objectTech = [];   

  for (let i = 0; i < tecnologiasCrescente.length; i += 1){
    objectTech.push({tech: tecnologiasCrescente[i], name: name});
  }
  
  if (tecnologias.length === 0){
    return "Vazio!";
  }
  else{
  return objectTech;
  }
}

techList([], "Lucas");

// Desafio 11
function generatePhoneNumber(numbers) { 
  let naoEstaEntre0E9 = 0;

  for(let index in numbers){
    if(numbers[index] < 0 || numbers[index] > 9){
    naoEstaEntre0E9 += 1;    
    }
  }

  let repetition = 0;

  for (let index in numbers){
      let verificaNumero = numbers[index];
      for (let index2 in numbers){
          if (verificaNumero === numbers[index2]){
              repetition += 1;
          }
      }
      if (repetition > 2){
          break;
      }
      repetition = 0;
  }

  let generate = "("+numbers.slice(0,2).join("")+") "+numbers.slice(2,7).join("")+"-"+numbers.slice(7,11).join("");
  

  if (numbers.length !== 11) {
    return "Array com tamanho incorreto.";
  }
  else if (naoEstaEntre0E9 != 0 || repetition > 2){
      return "não é possível gerar um número de telefone com esses valores";
  }
  else {
      return generate;
  }   
}

generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1]);

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let somaA = lineB + lineC;
  let subtraiA = lineB - lineC;

  let somaB = lineA + lineC;
  let subtraiB = lineA - lineC;

  let somaC = lineA + lineB;
  let subtraiC = lineA - lineB;

  let linhaTrianguloA = false;
  let linhaTrianguloB = false;
  let linhaTrianguloC = false

  if (lineA < somaA && lineA > Math.abs(subtraiA)){
    linhaTrianguloA = true;
  }

  if (lineB < somaB && lineB > Math.abs(subtraiB)){
    linhaTrianguloB = true;
  }

  if (lineC < somaC && lineC > Math.abs(subtraiC)){
    linhaTrianguloC = true;
  }

  if (linhaTrianguloA === true && linhaTrianguloB === true && linhaTrianguloC === true){
    return true;
  }
  else {
    return false;
  }

}

triangleCheck(10, 14, 8);

// Desafio 13
function hydrate(string) {
  let somenteNumeros = string.replace(/\D+/g, "");
  let arrayNum = somenteNumeros.split("");
  
  let somarArray = 0;

  for (let i = 0; i < arrayNum.length; i += 1){
    somarArray += parseInt(arrayNum[i]);
  }
  if (somarArray === 1){
    return somarArray + " copo de água";
  }
  else{
  return somarArray + " copos de água";
  }
}

hydrate("1 cachaça, 5 cervejas e 1 copo de vinho")

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
