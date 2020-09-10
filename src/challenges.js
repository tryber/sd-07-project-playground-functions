// Desafio 1
function compareTrue(a , b) {
  // seu código aqui
  if(a === true && b === true){
    return true;
  }else{
    return false;
  } 
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calc = (base * height) /2;
  return calc;
}

// Desafio 3
function splitSentence(stringName) {
  // seu código aqui
 return stringName.split(" ");
}

// Desafio 4
function concatName(arrayString) {
  // seu código aqui
  let first = arrayString[0];
  let last = arrayString[arrayString.length-1];
  let fullName= last + ", " + first; 
  return fullName;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let sumWins = wins * 3;
  let sumTies = ties * 1;
  let sun = sumWins + sumTies;
return sun;
}

// Desafio 6
function highestCount(arrayNumber) {
  // seu código aqui
  let result = 0;
  let big = 0;
  
  for(let cont in arrayNumber)
  {
    if(arrayNumber[cont] > big){
      big = arrayNumber[cont];
    }
}
  for(let cont in arrayNumber){
    if(big === arrayNumber[cont]){
      result += 1;
      console.log(result);
    }
  }
 return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);

   if(distCat1 < distCat2){
  return "cat1";
 }else if(distCat1 > distCat2){
  return "cat2";
 }else{
   return ('os gatos trombam e o rato foge')
 }
}

// Desafio 8
function fizzBuzz(inputArray) {
  // seu código aqui
  let numb = null;
  let numberArray = [];

  for(let cont of inputArray){
    if((cont % 3 === 0) && (cont % 5 === 0)){
    numb = 'fizzBuzz';
    }else if(cont % 5 === 0){
    numb = 'buzz';
    }else if(cont % 3 === 0){
    numb = 'fizz';
    }else{
    numb = 'bug!';
    }
    numberArray.push(numb);
  }
  return (numberArray);
}


// Desafio 9
function encode(words) {
  // seu código aqui
  let word = "";

  for (let cont in words){
    switch (words[cont]){
      case "a":
      word += "1";
      break;

      case "e":
      word += "2";
      break;

      case "i":
      word += "3";
      break;

      case "o":
      word += "4";
      break;

      case "u":
      word += "5";
      break;
      
        default:
        word += words[cont];
      
    }
  }
 return (word);
}

function decode(words) {
  // seu código aqui
  let word = "";

  for (let cont in words){
    switch (words[cont]){
      case "1":
      word += "a";
      break;

      case "2":
      word += "e";
      break;

      case "3":
      word += "i";
      break;

      case "4":
      word += "o";
      break;

      case "5":
      word += "u";
      break;
      
        default:
        word += words[cont];
      
    }
  }
 return (word);
}


// Desafio 10
function techList(tech, name) {
  // seu código aqui
let arraysort = tech.sort();
arrayresultado = []
if(tech.length <= 0){
  return "Vazio!";
}else {
  for(let key in arraysort){
    let newObject = {
      tech:tech[key],
      name:name
    }
    arrayresultado.push(newObject);
  }
  return (arrayresultado);
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
