// Desafio 1
function compareTrue(a,b) {
  if( a == true && b == true){
    return  true;
  }
  else if (a == false && b == false){
    return false;
  }
  else if( a == true && b == false){
    return false;
  }
    else if( a == false && b == true){
    return false;
  }
}


// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(lista) {
  let novo = lista[lista.length-1];
  lista.unshift(novo);
  lista.pop();
  return lista;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = (wins * 3 );
  ties = (ties * 3 );
  return (wins + ties);
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
