// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

// Desafio 3
function splitSentence(word) {
  let arrayWord = [""];
  let x = 0;
  for(let i = 0; i < word.length; i += 1){
    if (word[i] != " "){
      arrayWord[x] += word[i];
    }else {
      x += 1;
      arrayWord[x] = "";
    }
  }
  return arrayWord;
}


// Desafio 4
function concatName(array) {
  return `${array[array.length-1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins*3) + (ties*1));
}

// Desafio 6
function highestCount(array) {
  let highest = Math.max(...array);
  let repetition = 0;
  for (let i = 0; i < array.length; i += 1){
    if (array[i] === highest){
      repetition += 1;
    }
  }
  return repetition;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse-cat1);
  let distCat2 = Math.abs(mouse-cat2);
  if(distCat1 < distCat2){
    return "cat1";
  }else if(distCat2 === distCat1){
    return "os gatos trombam e o rato foge";
  }
  else{
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let phraseFizzBuzz = [];
  for (let x = 0; x < array.length; x += 1){
    if((array[x] % 3 === 0)&&(array[x] % 5 === 0)){
      phraseFizzBuzz.push("fizzBuzz");
    }else if(array[x] % 3 === 0){
      phraseFizzBuzz.push("fizz");
    }else if(array[x] % 5 === 0){
      phraseFizzBuzz.push("buzz");
    }else{
      phraseFizzBuzz.push("bug!");
      }
  }
  return phraseFizzBuzz;
}

// Desafio 9
function encode(crypt) {
  let crypted = "";
  for(let x = 0;x < crypt.length; x += 1){
    switch(crypt[x]){
      case 'a':
        crypted += '1';
        break;
      case 'e':
        crypted += '2';
        break;
      case 'i':
        crypted += '3';
        break;
      case 'o':
        crypted += '4';
        break;
      case 'u':
        crypted += '5';
        break;
      default:
        crypted += crypt[x];
        break;
    }
  }
  return crypted;
}

function decode(crypt) {
  let crypted = "";
  for(let x = 0;x < crypt.length; x += 1){
    switch(crypt[x]){
      case '1':
        crypted += 'a';
        break;
      case '2':
        crypted += 'e';
        break;
      case '3':
        crypted += 'i';
        break;
      case '4':
        crypted += 'o';
        break;
      case '5':
        crypted += 'u';
        break;
      default:
        crypted += crypt[x];
        break;
    }
  }
  return crypted;
}

// Desafio 10
function techList(array, name) {
  if(array === null || array === undefined || array.length === 0){
    return "Vazio!";
  }
  array.sort();
  let objectTech = [];
  for(let x = 0; x < array.length; x += 1){
    objectTech.push({
      tech: array[x],
      name: name
    });
  }
  return objectTech;
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
