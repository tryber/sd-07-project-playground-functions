// Desafio 1
function compareTrue(a,b) {  
  if(a === true && b === true){
    return true;
  } else{
    return false;
  }
}
// Desafio 2
function calcArea(base,height) {
  result = ((base*height)/2);
  return result;
}
// Desafio 3
function splitSentence(phrase) {
  let word1=phrase.split(" ");
  return word1;
}
// Desafio 4
function concatName(phrase) {
  return phrase[phrase.length-1] + ', ' + phrase[0];
  
}
// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 +ties;
}

// Desafio 6
function highestCount(maior) {
  let largest= 0;
  for (i=0; i<=largest;i++){
    if (maior[i]>largest) {
      largest=maior[i];
    }
  }
  let contador= 0;
  for (i=0; i<=maior.length-1;i++){
    if (maior[i]===largest) {
        contador++;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if( Math.abs(mouse-cat1)>Math.abs(mouse-cat2)){
    return "cat2";
  } else if( Math.abs(mouse-cat1)<Math.abs(mouse-cat2)){
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
}
// Desafio 8
function fizzBuzz(numbers) {
  for(let i=0; i<numbers.length; i+=1) {
    if(numbers[i]%5==0 && numbers[i]%3==0){
      numbers[i]='fizzBuzz';
    } 
    else if(numbers[i]%3==0){
      numbers[i]='fizz';      
    }
    else if(numbers[i]%5==0){
      numbers[i]='buzz';
    } else {
      numbers[i]='bug!';
    }    
  }
  return numbers;
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
