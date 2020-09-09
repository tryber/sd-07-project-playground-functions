// Desafio 1

function compareTrue()
compareOne = true;
compareTwo = true;
let comparar = compareOne && compareTwo;
return comparar
  console.log (comparar)


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
if (j === maiorNumero){
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
function fizzBuzz(array) {
let novoArray =[];
for (let numeros in array){
if (numeros / 5 === 0 && numeros / 3 === 0)
novoArray.push("fizzbuzz");
else if (numeros / 5 === 0)
novoArray.push("buzz");
else if (numeros / 3 === 0)
novoArray.push("fizz");
else 
novoArray.push("bug!");
}
return novoArray;
}

// Desafio 9
function encode(frase) {
let novaFrase = frase.replace(/a/g, "1");
novaFrase = frase.replace(/e/g, "2");
novaFrase = frase.replace(/i/g, "3");
novaFrase = frase.replace(/o/g, "4");
novaFrase = frase.replace(/u/g, "5");

return novaFrase;
}
function decode(frase) {
  let novaFrase = frase.replace(/1/g, "a");
novaFrase = frase.replace(/2/g, "e");
novaFrase = frase.replace(/3/g, "i");
novaFrase = frase.replace(/4/g, "o");
novaFrase = frase.replace(/5/g, "u");

return novaFrase;
}

// Desafio 10
function techList(learn, name) {
  if (learn == 0) {
return "Vazio!";
  }
  let learnTechnology = [];
  for ( let i in learn) {
let organization = learn.sert();
let includeTechList = { 
  tech: learn[i],
  name: nome,
}
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
