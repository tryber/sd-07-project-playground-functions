// Desafio 1
function compareTrue(bool1 , bool2) {
  // seu código aqui
  if (bool1 === true && bool2===true) {
    return true
  }
  else {
    return false
  }

}

// Desafio 2
function calcArea(base , height) {
  // seu código aqui
 
  let area = (base * height)/2;
  return area;

}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = string.split(" ");
  return array;


}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let newArray = [array[array.length -1] , array[0]];
  return newArray
}

// Desafio 5
function footballPoints(wins , ties ) {
  // seu código aqui
  let points = (wins*3 + ties);
  return points;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let max = array[0]

  for (let i in array){
    if (i > max){
    max = i;
  }
  let counter = 0
  for(let i in array) {
    if(max = array[i])
    counter += 1
  }
  return counter
}

// Desafio 7
function catAndMouse(cat1 , cat2 , mouse) {
  // seu código aqui
  if(cat2 > cat1) {
    return "cat2";
  }
  if(cat1 > cat2) {
    return "cat1";
  }
  else {
    return "os gatos trombam e o rato foge";
  }
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
