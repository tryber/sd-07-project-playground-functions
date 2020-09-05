// Desafio 1
function compareTrue(first, second) {
  // seu código aqui
  return first && second ? true : false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base*height)/2);
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  return phrase.split(" ");
}

// Desafio 4
function concatName(arraysname) {
  // seu código aqui
  const firstPos = arraysname[0];
  const finalPos = arraysname[arraysname.length - 1];
  const final = finalPos + ', ' + firstPos;
  return final;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(arrayNumber) {
  // seu código aqui
  const maior = whatIsHighest(arrayNumber);
  let count = 0;
  for (let i = 0; i< arrayNumber.length; i +=1 ){
    if(arrayNumber[i] === maior){
      count += 1;
    }
  }
  return count;
}

function whatIsHighest(numbers){
  let maior = -1000000000;
  for (let i = 0; i < numbers.length; i +=1 ){
    if(maior < numbers[i]){
      maior = numbers[i];
    }
  }
  return maior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)){
    return "os gatos trombam e o rato foge";
  }
  return Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse) ? "cat2" : "cat1";
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  // seu código aqui
  const divisores = [];
  for (let i = 0; i < arrayNumber.length; i += 1){
    if(arrayNumber[i] % 3 === 0 && arrayNumber[i] % 5 === 0){
      divisores.push('fizzBuzz');
    }else if(arrayNumber[i] % 3 === 0){
      divisores.push('fizz');
    }else if(arrayNumber[i] % 5 === 0){
      divisores.push('buzz');
    }else {
      divisores.push('bug!');
    }
  }
  return divisores;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
