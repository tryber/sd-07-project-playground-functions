// Desafio 1
let c1 = false;
let c2 = false;
function compareTrue(a,b){
if (a===true && b === true)
return true;
}
return false;
}
// Desafio 2
let base = 10;
let height = 5;
function calcArea(base,height) {
let area = (base*height)/2;
return area ;
}
calcArea(base,height)

// Desafio 3
let sentence = "go Trybe";
function splitSentence(a) {
  // seu código aqui
return a.split(" ");
}
splitSentence(sentence)

// Desafio 4
let names = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName(a) {
  let newStrings = '';
  //newStrings += a[0]
  for (let i = 0; i < a.length; i +=1) {
if (i == a.length -1) {
newStrings += a[i]

}
  }
return newStrings + ' , ' + a[0]
}
concatName(names)


//let repost = name.length - 1;





// Desafio 5
let victory = 5;
let draw = 3;
function footballPoints(wins, ties) {
  wins = wins *3;
  return wins + ties;
}
footballPoints(victory, draw)

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
