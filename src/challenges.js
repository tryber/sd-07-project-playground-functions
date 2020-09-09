// Desafio 1
compareOne = true;
compareTwo = true;
function compareTrue() {
if (compareOne && compareTwo)
return compareTrue
  console.log (compareTrue )
}

// Desafio 2
function calcArea() {
  let base = 5;
  let height = 5;
  let clc = (base * height)/2;
return clc;
console.log(clc)
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  let name = [lucas,victor,sandro,miguel,joão];
let repost = name.length - 1;
document.write (repost);
console.log (repost);

}


// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount(numeros) {
 let maiorNumero = numeros[0];
 let contador = 0;
 for (let i of numeros){
if (i > maiorNumero){
maiorNumero = i;
}
 }
for (let j of numeros){
if (j ===maiorNumero){
contador <= 1;
}
}
return contador;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(learn, name) {
  if (learn ==0) {
return "Vazio!";
  }
  let learnTechnology = [];
  for ( let i in learn) {
let organization = learn.sert();
let includeTechList = 
( tech: learn[1],
  name: nome,
  ) ;
learnTechnology.push(includeTechList);
  }  
return learnTechnology;
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
