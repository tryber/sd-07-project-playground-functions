
// Desafio 1
function compareTrue(value1, value2) {
    if (value1&&value2) {
      return true;
    }

  return false;
}
//console.log(compareTrue());


// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}
//console.log(calcArea());


// Desafio 3
function splitSentence(sentence) {

  sentence = sentence.split(" ")
  
  return sentence;
}
//console.log(splitSentence());


// Desafio 4
function concatName(sentenceArray = []) {
  let last = sentenceArray.pop();
  let first = sentenceArray.shift();

  let lastFirst = last + ", " + first;
  return lastFirst;
}
//console.log(concatName());


// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let teamPoints = pointsWins + ties;

  return teamPoints;
}
//console.log(footballPoints());


// Desafio 6
function highestCount(values = []) {
  let quantMax = 0;
  let max = Math.max.apply(null, values);

  for(let i = 0; i < values.length; i += 1){
    if (max === values[i]){
      quantMax += 1;
    }
  }
 return quantMax;


}
//console.log(highestCount());

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(cat1 - mouse);
  let positioncat2 = Math.abs(cat2 - mouse);
  if(positionCat1 === positioncat2){
    return "os gatos trombam e o rato foge";
  }else if(positionCat1 > positioncat2){
    return "cat2";
  }else{
    return "cat1";
  }
}

//console.log(catAndMouse());

// Desafio 8
function fizzBuzz(arrayNum = []) {
  arrayReturn = [];
for(let i = 0; i<arrayNum.length; i += 1){
  if(arrayNum[i] % 3 === 0 && arrayNum[i] % 5 === 0){
    arrayReturn.push("fizzBuzz")
  }else if(arrayNum[i] % 3 === 0){
    arrayReturn.push("fizz")
  }else if(arrayNum[i] % 5 === 0){
    arrayReturn.push("buzz")
  }else{
    arrayReturn.push("bug!")
  }
}
return arrayReturn;
}
//console.log(fizzBuzz());



// Desafio 9
function encode(encoding = "hi there") {
  
  return encoding = encoding.replace(/a/g, '1'),
   encoding = encoding.replace(/e/g, '2'),
   encoding = encoding.replace(/i/g, '3'),
   encoding = encoding.replace(/o/g, '4'),
   encoding = encoding.replace(/u/g, '5');
 
}
console.log(encode());


function decode(decoding = "h3 th2r2") {

  return decoding = decoding.replace(/1/g, 'a'),
   decoding = decoding.replace(/2/g, 'e'),
   decoding = decoding.replace(/3/g, 'i'),
   decoding = decoding.replace(/4/g, 'o'),
   decoding = decoding.replace(/5/g, 'u');
 
}
console.log(decode());
// Desafio 10
function techList(tech=[], name) {
  let result=[];
  tech.sort();
  if(tech.length === 0){
    result = "Vazio!"
  }else{
    for(let index = 0; index < tech.length; index +=1){
      result.push({tech: tech[index], name});
  
   }  
  }
 
  return result;
 
}
console.log(techList());

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
