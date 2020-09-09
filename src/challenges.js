// Desafio 1
let a= false;
let b= false;
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  };
}
// Desafio2 - CORRETO
let base = 10;
let height = 5;
function calcArea(base,height) {
let area = (base*height)/2;
return area ;
}

calcArea(base,height)

// Desafio 3 -CORRETO
let sentence = "go Trybe";
function splitSentence(a) {
  // seu código aqui
return a.split(" ");
}
splitSentence(sentence)

// Desafio 4 -  CORRETO
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

// Desafio 5 - CORRETO
let victory = 5;
let draw = 3;
function footballPoints(wins, ties) {
  wins = wins *3;
  return wins + ties;
}
footballPoints(victory, draw)

// Desafio 6
let highNumberList = [9,1,2,3,9,5,7];
function highestCount(a) {
let highNumbers =[0];
for (let = i = 0; i < a.length; i += 1) {
if (a[i] > highNumbers[0]){
highNumbers.shift()
highNumbers.push(a[i])
}
}
let highNumbersFinal = 0;
for (let j = 0; j < a.length ; j +=1){
if (highNumbers[0] === a[j]) {
highNumbersFinal = highNumbersFinal + 1;
}
}
return highNumbersFinal;
}
highestCount(highNumberList)

// Desafio 7
let mouse = 3;
let cat1 = -1;
let cat2 = 4;
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;

  if (distanceCat1 < 0) {
    distanceCat1 = distanceCat1 * -1;
  }
  if (distanceCat2 < 0) {
    distanceCat2 = distanceCat2 * -1;
  }

  if (distanceCat1 > distanceCat2) {
    return 'cat1';
  }else if (distanceCat2 > distanceCat1){
    return 'cat2';
  }
    return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(mouse, cat1, cat2))

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
