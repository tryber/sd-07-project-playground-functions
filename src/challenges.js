// Desafio 1

function compareTrue(a, b) {
  // seu código aqui
let compare = a && b;
return compare;
}

  //let a= false;
//let b= false;
  //if (a === true && b === true) {
   // return true;
  //} else {
    //return false;
  //};


// Desafio2 - CORRETO

function calcArea(base,height) {

return (base*height)/2;
}


// Desafio 3 -CORRETO
function splitSentence(frase) {
 let palavras;
 palavras = frase.split (" ");
 return palavras;
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
